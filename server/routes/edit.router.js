const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.put("/:id", (req, res) => {
  let movieId = req.params.id; // Get the movie ID from the URL parameter
  let newTitle = req.body.title; // Get the new title from the request body
  let newDescription = req.body.description; // Get the new description from the request body
  // Verifying the data coming through from server:
  // console.log("title:", newTitle, "description:", newDescription, "ID: ",movieId);

  let queryText = `
    UPDATE "movies"
    SET "title" = $1, "description" = $2
    WHERE "id" = $3;
  `;

  pool
    .query(queryText, [newTitle, newDescription, movieId])
    .then((result) => {
      res.sendStatus(200); // Send a success status code
    })
    .catch((err) => {
      console.error("Error updating movie:", err);
      res.sendStatus(500); // Send a server error status code
    });
});

module.exports = router;
