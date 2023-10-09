import React from 'react';
import "./Movies.css";

import MovieForm from "../MovieForm/MovieForm";

export default function Movies () {
    return (
        <div>
            <h1 className="movie-h1">Add a movie:</h1>
            <MovieForm />
        </div>
    );
}