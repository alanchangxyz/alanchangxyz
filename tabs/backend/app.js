import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import tabsRouter from './routes/tabs.js';
import usersRouter from './routes/users.js';

import nominatim from './services/nominatim.js';
import yelp from './services/yelp.js';

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(
  cors({
    origin: `${process.env.ORIGIN}`,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/tabs', tabsRouter);
app.use('/users', usersRouter);

// sanity check
app.get('/', async (req, res) => {
  try {
    return res.status(200).json({ status: "success" });
  } catch (e) {
    return res.status(500).send(`/ - ${e.status} - ${e.message}`);
  }
});

app.get('/nominatim', async (req, res) => {
  const { street, city } = req.query;
  const result = await nominatim().searchByStreetAndCity(street, city);
  return res.status(200).json(result);
});

app.get('/yelp', async (req, res) => {
  const { term, location } = req.query;
  const result = await yelp().searchByTermAndLocation(term, location);
  return res.status(200).json(result.data);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
