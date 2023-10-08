import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// Styling
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import "./Edit.css";

export default function Edit() {
  const dispatch = useDispatch();
  const history = useHistory();
  //   const paramsObject = useParams();
  const [showInput, setShowInput] = useState(false);
  const [editedTitle, setEditedTitle] = useState(""); // State for edited title
  const [editedDescription, setEditedDescription] = useState(""); // State for edited description

  // bring in details from the _rootReducer
  const editDetails = useSelector((store) => store.details.editReducer);
  console.log("EDIT DETAILS: ", editDetails);

  // Function to toggle edit mode
  const toggleEditMode = () => {
    setShowInput(!showInput);
    // If entering edit mode, initialize the input with the current title
    if (!showInput) {
      setEditedTitle("");
    } else {
      setEditedTitle(editDetails.title); // clear the input field in edit mode
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Define the action creator for dispatch
    const editMovie = (newInfo) => ({
      type: "EDIT_MOVIE", // --> ADD_MOVIE communicates with the addReducer
      payload: newInfo,
    });

    // Create a movie object with the form data
    const newInfo = {
      title: editedTitle,
      description: editedDescription,
    };

    // Dispatch the action
    dispatch(editMovie(newInfo));

    // history.push(`/`);
    // alert("Edited Movie, sent to Database!");

    // Clear the form fields after adding the movie
    setEditedTitle("");
    setEditedDescription("");
    setShowInput(false);
  };

  return (
    <div>
      <Typography variant="h2" style={{ fontFamily: "open sans" }}>
        Edit Movie
      </Typography>
      <div className="edit-card">
        <Card
          style={{
            width: "50%",
            margin: "0 auto",
            borderRadius: "40px",
            backgroundColor: "black",
          }}
        >
          <CardContent style={{ color: "ghostwhite" }}>
            <br />
            <br />
            {/* Conditionally render the title */}
            {showInput ? (
              <TextField
                type="text"
                value={editedTitle}
                placeholder="Enter New Title"
                onChange={(e) => setEditedTitle(e.target.value)}
                style={{backgroundColor: "aliceblue"}}
              />
            ) : (
              <Typography variant="h4">{editDetails.title}</Typography>
            )}
            {/* Toggle edit mode button */}
            <br />
            <Button onClick={toggleEditMode} style={{ color: "red" }}>
              {showInput ? "Back" : "Edit Title"}
            </Button>{" "}
            <br />
            <hr />
            <br />
            {showInput ? (
              <TextField
                type="text"
                value={editedDescription}
                placeholder="Enter New Description..."
                onChange={(e) => setEditedDescription(e.target.value)}
                style={{backgroundColor: "aliceblue"}}
              />
            ) : (
              <Typography variant="h6">{editDetails.description}</Typography>
            )}
            {/* Toggle edit mode button */}
            <br />
            <Button onClick={toggleEditMode} style={{ color: "red" }}>
              {showInput ? "Back" : "Edit Description"}
            </Button>{" "}
          </CardContent>
          <div className="edit-buttons">
            <Button
              variant="outlined"
              onClick={() => history.push("/details/:id")}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={handleClick}>
              Save
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
