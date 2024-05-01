import express from 'express';
import mdb from '../services/mongodb.js';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const result = await mdb.db("db").collection("tabs").find();
    return res.status(200).json(result);
  })
  .post(async (req, res) => {
    // const result = await mdb.db("db").collection("tabs").insertOne({

    // });
    // return res.status(200).json({ id: result.insertedId });
    return res.status(500);
  });

router.route('/:id')
  .get(async (req, res) => {
    const result = await mdb.db("db").collection("tabs").findOne({ id });
    return res.status(200).json(result);
  })
  .put(async (req, res) => {

  })
  .delete(async (req, res) => {
    const result = await mdb.db("db").collection("tabs").deleteOne({ id });
    return res.status(200).json({ deleted: result.deletedCount });
  });

router.route('/search')
  .post((req, res) => {
    return res.status(500);
  });

export default router;
