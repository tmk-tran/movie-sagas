const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// router.put("/:id", (req, res) => {
//   let favoriteId = req.params.favoriteId;
//   let categoryId = req.body.categoryId;
//   let queryText = `UPDATE "movies" SET "title" = $1
//   WHERE "id" = $2;`;
//   pool
//     .query(queryText, [categoryId, favoriteId])
//     .then((result) => {
//       res.sendStatus(201);
//     })
//     .catch((err) => {
//       console.log("error updating favorite:", err);
//       res.sendStatus(500);
//     });
// });

module.exports = router;