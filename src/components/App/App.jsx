import { HashRouter as Router, Route } from "react-router-dom";

// Components
import Details from "../Details/Details";
import MovieList from "../MovieList/MovieList";
import Movies from "../Movies/Movies";
import Edit from "../Edit/Edit";
import "./App.css";
import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <h1 className="text-with-shadow">SagaFlix</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
        <div className="navbar">
          <Navbar />
        </div>
      </Router>
    </div>
  );
}

export default App;
