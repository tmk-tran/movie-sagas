import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Styling
import "./MovieList.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Typography } from "@mui/material";

function MovieList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector((store) => store.details.movies);
  console.log(movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <h1>Movies</h1>
      <div className="movies">
        <Grid container spacing={2}>
          {movies.map((movie) => {
            return (
              <Grid item key={movie.id} xs={3}>
                <div>
                  <Card style={{ width: "50%" }}>
                    <CardContent>
                      <h3>{movie.title}</h3>
                      <img
                        style={{ width: "100%", height: "auto" }}
                        onClick={() => history.push(`/details/${movie.id}`)}
                        src={movie.poster}
                        alt={movie.title}
                      />
                    </CardContent>
                  </Card>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </main>
  );
}

export default MovieList;
