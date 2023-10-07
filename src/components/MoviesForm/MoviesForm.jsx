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
  Input
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
  console.log("GenreId: ", genreId);

  const handleClick = (e) => {
    e.preventDefault();

    // Create a movie object with the form data
    const newMovie = {
      title: movieTitle,
      poster: imageUrl,
      description,
      genre_id: genreId, // Use genreId instead of genre
    };

    dispatch({
      type: "ADD_MOVIE",
      payload: newMovie,
    });
    // history.push(`/`);
    console.log("NEW MOVIE ", newMovie);

    // Clear the form fields after adding the movie
    setMovieTitle("");
    setGenre("");
    setImageUrl("");
    setDescription("");
    setGenreId("");
  };

  // Function to handle genre selection
  const handleGenreChange = (e) => {
    const selectedGenre = e.target.value;
    // Assuming you have a way to map genre names to genre IDs, set genreId accordingly.
    // For example, if you have a genresData array with objects containing id and name:
    // const selectedGenreId = genresData.find((genre) => genre.name === selectedGenre)?.id;
    // setGenreId(selectedGenreId);

    // For now, you can set genreId to the selected genre name as a placeholder.
    setGenreId(selectedGenre);
    setGenre(selectedGenre); // Update the displayed genre
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
              <MenuItem value="Adventure">Adventure</MenuItem>
              <MenuItem value="Animated">Animated</MenuItem>
              <MenuItem value="Biographical">Biographical</MenuItem>
              <MenuItem value="Comedy">Comedy</MenuItem>
              <MenuItem value="Disaster">Disaster</MenuItem>
              <MenuItem value="Drama">Drama</MenuItem>
              <MenuItem value="Epic">Epic</MenuItem>
              <MenuItem value="Fantasy">Fantasy</MenuItem>
              <MenuItem value="Musical">Musical</MenuItem>
              <MenuItem value="Romantic">Romantic</MenuItem>
              <MenuItem value="Science Fiction">Science Fiction</MenuItem>
              <MenuItem value="Space-Opera">Space-Opera</MenuItem>
              <MenuItem value="Superhero">Superhero</MenuItem>
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
