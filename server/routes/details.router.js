const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT
    m.id AS movie_id,
    m.title AS movie_title,
    m.poster AS movie_poster,
    m.description AS movie_description,
    ARRAY_AGG(g.name) AS genres
FROM
    movies AS m
JOIN
    movies_genres AS mg ON m.id = mg.movie_id
JOIN
    genres AS g ON mg.genre_id = g.id
WHERE
    m.id = $1
GROUP BY
    m.id, m.title, m.poster, m.description; `;

  pool
    .query(query, [id])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

module.exports = router;
