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
import "./MoviesForm.css";

export default function MovieForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [imageUrl, setImageUrl] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  // Add a state variable for genreId
  const [genreId, setGenreId] = useState("");
  console.log("Movie: ", movieTitle);
  console.log("imageURL: ", imageUrl);
  console.log("Genre: ", genre);
  console.log("Description: ", description);
  console.log("Genre_Id: ", genreId);

  const handleClick = (e) => {
    e.preventDefault();

    // Define the action creator within the component
  const addMovie = (newMovie) => ({
    type: "ADD_MOVIE",
    payload: newMovie,
  });

    // Create a movie object with the form data
    const newMovie = {
      title: movieTitle,
      poster: imageUrl,
      description,
      genre_id: genreId, // Use genreId instead of genre
    };

    // Dispatch the action
    dispatch(addMovie(newMovie));
    
    // history.push(`/`);
    console.log("NEW MOVIE ", newMovie);

    // Clear the form fields after adding the movie
    setMovieTitle("");
    setGenre("");
    setImageUrl("");
    setDescription("");
    setGenreId("");
  };

  return (
    <Card className="movie-form-card" style={{ borderRadius: "15px" }}>
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
              displayEmpty
              variant="outlined"
              required
              value={genre} // Bind the value to the genre state
              onChange={(e) => {
                setGenre(e.target.value);
                setGenreId(e.target.value); // Set genreId when genre changes
              }}
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
              required
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

          <Button onClick={handleClick} variant="contained">
            click
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
