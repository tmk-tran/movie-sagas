import { HashRouter as Router, Route, Link } from "react-router-dom";

// Components
import Details from "../Details/Details";
import MovieList from "../MovieList/MovieList";
import Movies from "../Movies/Movies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/details">Details</Link>
        <Link to="/movies">Movies</Link>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </Router>
    </div>
  );
}

export default App;
