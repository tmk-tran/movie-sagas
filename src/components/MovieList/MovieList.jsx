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
      <h1>MovieList</h1>
      <div className="movies">
        <Grid container spacing={3}>
          {movies.map((movie) => {
            return (
              <Grid item key={movie.id} xs={4}>
                <Card style={{ width: "50%" }}>
                  <CardContent>
                    <h3>{movie.title}</h3>
                    <img
                      onClick={() => history.push("/details")}
                      src={movie.poster}
                      alt={movie.title}
                    />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </main>
  );
}

export default MovieList;
