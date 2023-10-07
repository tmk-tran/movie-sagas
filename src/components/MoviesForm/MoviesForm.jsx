import React from "react";

export default function MovieForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1"></label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Movie Title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1"></label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option value="defaultOption" disabled>
            Select an genre...
          </option>
          <option>Adventure</option>
          <option>Animated</option>
          <option>Biographical</option>
          <option>Comedy</option>
          <option>Disaster</option>
          <option>Drama</option>
          <option>Epic</option>
          <option>Fantasy</option>
          <option>Musical</option>
          <option>Romantic</option>
          <option>Science Fiction</option>
          <option>Space-Opera</option>
          <option>Superhero</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1"></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Description"
        ></textarea>
      </div>
    </form>
  );
}
