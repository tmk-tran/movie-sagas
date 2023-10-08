import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// Styling
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./Details.css";

export default function Details() {
  const [showDescription, setShowDescription] = useState(false);
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

  const goBack = () => {
    history.push("/");
  };

  const editClick = () => {
    dispatch({
      type: "EDIT_MOVIE",
      payload: { id, title, description },
    });
    history.push("/edit/:id");
  };

  return (
    <>
      <div className="details-box">
        <Card
          className="details-card"
          style={{
            borderRadius: "15px",
          }}
        >
          <CardContent style={{ backgroundColor: "rgba(3, 0, 0, 0.94)"}}>
            <div className="buttons-details">
              <Button onClick={goBack} variant="contained">
                Back
              </Button>
              <Button onClick={editClick} variant="outlined">
                Edit
              </Button>
            </div>
            <img src={poster} />
            <br />
            <Typography variant="h4" style={{ fontFamily: "gotham", color: "ghostwhite" }}>
              {title}
            </Typography>
            <br />

            <Button
              onClick={() => setShowDescription(!showDescription)} // Toggle the state on button click
              variant="outlined"
              style={{ borderRadius: "20px" }}
            >
              {showDescription ? "Hide Description" : "Show Description"}
            </Button>
            {/* Conditionally render the description based on the state */}
            {showDescription && (
              <div>
                <hr />
                <Typography variant="caption" style={{ fontFamily: "avenir", color: "ghostwhite" }}>
                  {description}
                </Typography>
              </div>
            )}
            <hr />

            <Typography variant="h5" style={{ fontFamily: "gotham", color: "ghostwhite" }}>
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
