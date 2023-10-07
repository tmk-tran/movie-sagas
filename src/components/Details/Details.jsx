import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import Movies from "../Movies/Movies";
// Styling
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function Details() {
  const dispatch = useDispatch();
  const history = useHistory();
  const paramsObject = useParams();

  // bring in details from the _rootReducer
  const movieDetails = useSelector((store) => store.details.detailsReducer);
  console.log("DETAILS:", movieDetails);

  // Variables defining the categories in the object from the _rootReducer, details.detailsReducer
  const title = movieDetails.movie_title;
  const poster = movieDetails.movie_poster;
  const genreList = movieDetails.genres;
  const description = movieDetails.movie_description;
  console.log("Movie Title:", title);

  useEffect(() => {
    dispatch({
      type: "GET_DETAILS",
      payload: paramsObject.id,
    });
  }, []);

  function goBack() {
    history.push("/");
  }

  return (
    <>
      <Button onClick={goBack}>Back</Button>
      <h2>{title ? `Title: ${title}` : "No Movie Title Listed"}</h2>
      <Card style={{ width: "50%", margin: "0 auto" }}>
        <CardContent style={{ backgroundColor: "aliceblue" }}>
          <Typography variant="h4" style={{ fontFamily: "gotham" }}>
            {title}
          </Typography>
          <img src={poster} />
          <br />
          <Typography variant="caption" style={{ fontFamily: "avenir" }}>
            {description}
          </Typography>
          <br />
          <Typography variant="h5" style={{ fontFamily: "gotham" }}>
            Genres:{" "}
            {genreList && genreList.length > 0 ? (
              <span>{genreList.join(", ")}</span>
            ) : (
              <span>No Genres Listed</span>
            )}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
