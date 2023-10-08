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

  const [showInput, setShowInput] = useState(false);
  //   const [editId, setEditId] = useState(details.editReducer.id);
  const [editedTitle, setEditedTitle] = useState(""); // State for edited title
  const [editedDescription, setEditedDescription] = useState(""); // State for edited description

  // bring in details from the _rootReducer
  const editDetails = useSelector((store) => store.details.editReducer);
  //   console.log("IN EDIT DETAILS, DETAILS ARE: ", editDetails, "ID: ", editDetails.id);
  // Function to toggle edit mode
  const toggleEditMode = () => {
    setShowInput(!showInput);
    // If entering edit mode, initialize the input with the current title
    if (!showInput) {
      setEditedTitle(editDetails.title);
      setEditedDescription(editDetails.description);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Define the action creator for dispatch
    const editMovie = (newInfo) => ({
      type: "EDIT_MOVIE", // --> EDIT_MOVIE communicates with the editReducer
      payload: newInfo,
    });
    // Create a movie object with the form data
    const newInfo = {
      id: editDetails.id,
      title: editedTitle,
      description: editedDescription,
    };
    // Dispatch the action
    dispatch(editMovie(newInfo));

    history.push(`/`);
    alert("Adding New Information!");

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
            <Typography variant="h5" style={{ color: "white" }}>
              Title
            </Typography>
            <br />
            {/* Conditionally render the title */}
            {showInput ? (
              <TextField
                type="text"
                fullWidth
                value={editedTitle}
                placeholder="Enter New Title"
                onChange={(e) => setEditedTitle(e.target.value)}
                style={{ backgroundColor: "aliceblue" }}
              />
            ) : (
              <Typography variant="h4">{editDetails.title}</Typography>
            )}
            {/* Toggle edit mode button */}
            <Button id="edit" variant="outlined" onClick={toggleEditMode}>
              {showInput ? "Back" : "Edit Title"}
            </Button>{" "}
            <br />
            <hr />
            <br />
            <Typography variant="h5" style={{ color: "white" }}>
              Description
            </Typography>
            <br />
            {showInput ? (
              <TextField
                type="text"
                multiline
                rows="10"
                value={editedDescription}
                placeholder="Enter New Description..."
                onChange={(e) => setEditedDescription(e.target.value)}
                style={{ backgroundColor: "aliceblue", width: "100%" }}
              />
            ) : (
              <Typography variant="h6">{editDetails.description}</Typography>
            )}
            {/* Toggle edit mode button */}
            <Button id="edit" variant="outlined" onClick={toggleEditMode}>
              {showInput ? "Back" : "Edit Description"}
            </Button>{" "}
          </CardContent>
          <div className="edit-buttons">
            <Button
              id="cancel-button"
              variant="outlined"
              onClick={() => history.push("/details/:id")}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleClick}
              style={{ backgroundColor: "rgb(134, 22, 208)" }}
            >
              Save
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
