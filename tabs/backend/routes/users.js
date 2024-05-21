import express from 'express';
import mdb from '../services/mongodb.js';

const router = express.Router();

// interface User {
//   id: String,
//   username: String,
//   email: String,
//   services: {
//     venmo: String,
//     zelle: {
//       type: "phone" | "email",
//       value: String,
//     }
//   }
// }

router.route('/')
  .get(async (req, res) => {
    const result = await mdb.db("db").collection("users").find().toArray();
    return res.status(200).json(result);
  })
  .post(async (req, res) => {
    const result = await mdb.db("db").collection("users").insertOne({
      id: req.body.id,
      username: req.body.username,
      email: req.body.email,
      services: {
        venmo: req.body.venmo,
        zelle: req.body.zelle,
      }
    });
    return res.status(200).json({ id: result.insertedId });
  });

router.route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const result = await mdb.db("db").collection("users").findOne({ id });
    return res.status(200).json(result);
  })
  .put(async (req, res) => {
    return res.status(500);
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const result = await mdb.db("db").collection("users").deleteOne({ id });
    return res.status(200).json({ deleted: result.deletedCount });
  });

export default router;
