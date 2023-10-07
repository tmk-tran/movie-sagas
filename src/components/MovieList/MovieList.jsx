import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Styling
import "./MovieList.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Button, Typography } from "@mui/material";

function MovieList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector((store) => store.details.movies);
  console.log(movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const scrollContainerRef = React.useRef(null);
  const cardWidth = 220; // Adjust to match card width including margin
  const numVisibleCards = 3; // Number of cards to display at a time
  const totalWidth = cardWidth * movies.length;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.transition =
        "transform 0.5s ease-in-out";
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
      }, 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.transition =
        "transform 0.5s ease-in-out";
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
      <h1>Movies</h1>
      <div
        className="movie-container"
        ref={scrollContainerRef}
        style={{ width: `${totalWidth}px` }}
      >
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="movie-card">
              <CardContent>
                <img
                  style={{ width: "100%", height: "auto", cursor: "pointer" }}
                  onClick={() => history.push(`/details/${movie.id}`)}
                  src={movie.poster}
                  alt={movie.title}
                />
                <br />
                <br />
                <Typography variant="h5" style={{fontFamily: "Trajan Pro"}}>{movie.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </div>
      <br />
      <div>
        <Button onClick={scrollLeft} variant="contained" style={{marginRight: "5px"}}>Left</Button>
        <Button onClick={scrollRight} variant="contained">Right</Button>
      </div>
    </div>
  );
}

export default MovieList;
