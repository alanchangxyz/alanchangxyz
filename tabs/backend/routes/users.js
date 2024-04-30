import express from 'express';

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
  .get((req, res) => {

  })
  .post((req, res) => {

  });

router.route('/:id')
  .get((req, res) => {

  })
  .put((req, res) => {

  })
  .delete((req, res) => {

  });

export default router;
