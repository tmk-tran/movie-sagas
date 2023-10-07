import React from "react";
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
  return (
    <Card className="movie-form-card">
      <CardContent>
        <form>
          <FormControl fullWidth>
            <TextField
              className="form-control"
              placeholder="Movie Title"
              variant="outlined"
              required
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
            >
              <MenuItem value="" disabled>
                Select Genre
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
            />
          </FormControl>

          <Button variant="contained">click</Button>
        </form>
      </CardContent>
    </Card>
  );
}
