import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

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

// sanity check
app.get('/', async (req, res) => {
  try {
    return res.status(200).json({ status: "success" });
  } catch (e) {
    return res.status(500).send(`/ - ${e.status} - ${e.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
