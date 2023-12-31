import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Styling
import "./MovieList.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function MovieList() {
  const dispatch = useDispatch();
  const history = useHistory();
  // bring in the reducer holding the movies
  const movies = useSelector((store) => store.details.movies);
  const genres = useSelector((store) => store.genres.genres);
  console.log("MOVIES: ", movies);
  console.log("GENRES: ", genres);

  // grab movies on page load
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
    dispatch({ type: "FETCH_GENRES" }); // --> action creator for saga
  }, []);

  const scrollContainerRef = React.useRef(null);
  const cardWidth = 220; // Adjust to match card width including margin
  const numVisibleCards = 3; // Number of cards to display at a time
  const totalWidth = cardWidth * movies.length;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.transition = "transform 1s ease-in-out";
      scrollContainerRef.current.style.transform = `translateX(${
        cardWidth * numVisibleCards
      }px)`; // Scroll 'numVisibleCards' at a time

      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.style.transition = "none";
          scrollContainerRef.current.style.transform = "translateX(0)";
          for (let i = 0; i < numVisibleCards; i++) {
            scrollContainerRef.current.appendChild(
              scrollContainerRef.current.firstElementChild
            );
          }
        }
      }, 400);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.transition = "transform 1s ease-in-out";
      scrollContainerRef.current.style.transform = `translateX(-${
        cardWidth * numVisibleCards
      }px)`; // Scroll 'numVisibleCards' at a time

      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.style.transition = "none";
          scrollContainerRef.current.style.transform = "translateX(0)";
          for (let i = 0; i < numVisibleCards; i++) {
            scrollContainerRef.current.insertBefore(
              scrollContainerRef.current.lastElementChild,
              scrollContainerRef.current.firstElementChild
            );
          }
        }
      }, 300);
    }
  };

  return (
    <div className="movie-row">
      <div
        className="movie-container"
        ref={scrollContainerRef}
        style={{ width: `${totalWidth}px` }}
      >
        {genres.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              className="movie-card"
              onClick={() => history.push(`/details/${movie.id}`)}
            >
              <CardContent>
                <img
                  className="movie-image"
                  style={{ width: "100%", height: "auto", cursor: "pointer" }}
                  onClick={() => history.push(`/details/${movie.id}`)}
                  src={movie.poster}
                  alt={movie.title}
                />
                <br />
                <br />
                <Typography
                  variant="h5"
                  style={{ fontFamily: "Proxima Nova", color: "ghostwhite" }}
                >
                  {movie.title}
                </Typography>
                <Typography variant="caption" style={{ color: "ghostwhite" }}>
                  {movie.genres.join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </div>
      <br />
      <div className="arrow-buttons">
        <IconButton
          id="arrows"
          onClick={scrollLeft}
          variant="contained"
          style={{ marginRight: "5px" }}
        >
          <ArrowBackIcon id="icon-arrow" />
        </IconButton>
        <IconButton id="arrows" onClick={scrollRight} variant="contained">
          <ArrowForwardIcon id="icon-arrow" />
        </IconButton>
      </div>
    </div>
  );
}

export default MovieList;
