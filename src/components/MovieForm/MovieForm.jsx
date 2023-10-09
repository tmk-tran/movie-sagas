import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Input,
} from "@mui/material";
import "./MovieForm.css";

export default function MovieForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [imageUrl, setImageUrl] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [genreId, setGenreId] = useState("");
  //   console.log("Movie: ", movieTitle);
  //   console.log("imageURL: ", imageUrl);
  //   console.log("Genre: ", genre);
  //   console.log("Description: ", description);
  //   console.log("Genre_Id: ", genreId);

  const handleClick = (e) => {
    e.preventDefault();

    // Define the action creator for dispatch
    const addMovie = (newMovie) => ({
      type: "ADD_MOVIE", // --> ADD_MOVIE communicates with the addReducer
      payload: newMovie,
    });

    // Create a movie object with the form data
    const newMovie = {
      title: movieTitle,
      poster: imageUrl,
      description: description,
      genre_id: genreId,
    };

    // Dispatch the action
    dispatch(addMovie(newMovie));

    history.push(`/home`);
    alert("Added Movie to Database!");

    // Clear the form fields after adding the movie
    setMovieTitle("");
    setGenre("");
    setImageUrl("");
    setDescription("");
    setGenreId("");
  };

  return (
    <Card
      className="movie-form-card"
      style={{ borderRadius: "25px", backgroundColor: "rgba(0, 0, 0, 0.76)" }}
    >
      <CardContent>
        <form>
          <FormControl fullWidth>
            <TextField
              className="form-control"
              placeholder="Movie Title"
              variant="outlined"
              value={movieTitle}
              required
              onChange={(e) => setMovieTitle(e.target.value)}
            />
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel id="dropdown-label">Select Genre</InputLabel>
            <Select
              className="form-control"
              labelId="dropdown-label"
              id="dropdown"
              variant="outlined"
              required
              style={{borderRadius: "10px"}}
              value={genre} // Bind the value to the genre state
              onChange={(e) => {
                setGenre(e.target.value);
                setGenreId(e.target.value); // Set genreId when genre changes
              }} // *** Need to rewrite what is below like group project example***
            >
              <MenuItem value="" disabled></MenuItem>
              <MenuItem value={1}>Adventure</MenuItem>
              <MenuItem value={2}>Animated</MenuItem>
              <MenuItem value={3}>Biographical</MenuItem>
              <MenuItem value={4}>Comedy</MenuItem>
              <MenuItem value={5}>Disaster</MenuItem>
              <MenuItem value={6}>Drama</MenuItem>
              <MenuItem value={7}>Epic</MenuItem>
              <MenuItem value={8}>Fantasy</MenuItem>
              <MenuItem value={9}>Musical</MenuItem>
              <MenuItem value={10}>Romantic</MenuItem>
              <MenuItem value={11}>Science Fiction</MenuItem>
              <MenuItem value={12}>Space-Opera</MenuItem>
              <MenuItem value={13}>Superhero</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              className="form-control"
              placeholder="Image URL"
              variant="outlined"
              required
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)} // Update 'imageUrl' state when input changes
            />
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <Input
              className="form-control"
              type="file"
              id="image-upload"
              accept="image/*"
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              className="form-control"
              placeholder="Description"
              multiline
              rows={4}
              variant="outlined"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <div className="form-buttons">
            <Button onClick={() => history.push("/")}>Cancel</Button>
            <Button onClick={handleClick} variant="contained">
              Add Movie
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
