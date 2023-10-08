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
import "./Details.css";
import detailsReducer from "../../redux/reducer/details.reducer";

export default function Details() {
  const dispatch = useDispatch();
  const history = useHistory();
  const paramsObject = useParams();

  // bring in details from the _rootReducer
  const movieDetails = useSelector((store) => store.details.detailsReducer);
  console.log("DETAILS:", movieDetails);

  // Variables defining the categories in the object from the _rootReducer, details.detailsReducer
  const id = movieDetails.movie_id;
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
      <div className="details-box">
        <Card
          className="details-card"
          style={{
            borderRadius: "15px",
          }}
        >
          <CardContent style={{ backgroundColor: "aliceblue" }}>
            <div className="buttons-details">
              <Button onClick={goBack} variant="contained">
                Back
              </Button>
              <Button
                onClick={() =>
                  dispatch({
                    type: "EDIT_MOVIE",
                    payload: { id, title, description },
                  })
                }
                variant="outlined"
              >
                Edit
              </Button>
            </div>
            <img src={poster} />
            <br />
            <Typography variant="h4" style={{ fontFamily: "gotham" }}>
              {title}
            </Typography>
            <br />
            <Typography variant="caption" style={{ fontFamily: "avenir" }}>
              {description}
            </Typography>
            <br />
            <Typography variant="h5" style={{ fontFamily: "gotham" }}>
              Genres:{" "}
              {genreList && genreList.length > 0 ? (
                <span>
                  {genreList.join(", ")}
                </span> /* joins the strings with a comma seprating them i.e. 'action, adeventure' */
              ) : (
                <span>No Genres Listed</span>
              )}
            </Typography>
            <br />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
