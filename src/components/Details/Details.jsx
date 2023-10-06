import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Movies from "../Movies/Movies";

export default function Details() {
  const dispatch = useDispatch();
  const history = useHistory();
  const paramsObject = useParams();
  const movieDetails = useSelector((store) => store.movies);
  console.log('DETAILS:', movieDetails);

  // movieDetails state object as variables
  const movieTitle = movieDetails.title;
  const moviePoster = movieDetails.poster;
  const movieGenreList = movieDetails.genres;
  const movieDescription = movieDetails.description;

  useEffect(() => {
    dispatch({
      type: "FETCH_MOVIE_DETAILS",
      payload: paramsObject.id,
    });
  }, []);

  function goBack() {
    history.push("/");
  }

  return (
    <>
      <h2>{movieTitle ? `Title: ${movieTitle}` : "No Movie Title Listed"}</h2>
      <img src={moviePoster} />
      <h2>
        Genres:{" "}
        {movieGenreList && movieGenreList.length > 0 ? (
          <span>{movieGenreList.join(", ")}</span>
        ) : (
          <span>No Genres Listed</span>
        )}
      </h2>
      <h2>{movieDescription}</h2>
      <button onClick={goBack}>Back</button>
    </>
  );
}
