const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// After call by generator function, router connects to server and makes query 
// Sends to genres reducer after response is received
router.get("/", (req, res) => {
  console.log(req.body);
  // Add query to get all genres
  const queryText = `
  SELECT
  movies.id,
  movies.title,
  movies.poster,
  movies.description,
  JSON_AGG(genres.name) AS genres
FROM
  movies
LEFT JOIN
  movies_genres ON movies.id = movies_genres.movie_id
LEFT JOIN
  genres ON movies_genres.genre_id = genres.id
GROUP BY
  movies.id, movies.title, movies.poster, movies.description;`;

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

module.exports = router;
