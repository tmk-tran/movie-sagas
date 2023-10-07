import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
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
  const [imageUrl, setImageUrl] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  console.log("Movie: ", movieTitle);
  console.log("imageURL: ", imageUrl);
  console.log("Genre: ", genre);
  console.log("Description: ", description);

  return (
    <Card className="movie-form-card">
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
              onChange={(e) => setGenre(e.target.value)}
            >
              <MenuItem value="" disabled>
              </MenuItem>
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
              value={imageUrl} // Assuming you have an 'imageUrl' state variable
              onChange={(e) => setImageUrl(e.target.value)} // Update 'imageUrl' state when input changes
            />
          </FormControl>

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
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>

          <Button variant="contained">click</Button>
        </form>
      </CardContent>
    </Card>
  );
}
