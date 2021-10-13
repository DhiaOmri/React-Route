import { useEffect, useState } from "react";
import AddMovie from "./components/AddMovie/AddMovie";
import { moviesData } from "./components/MoviesData";
import MoviesList from "./components/MoviesList";
import SearchMovie from "./components/SearchMovie/SearchMovie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/NavBar/Menu";
import MovieDescription from "./components/MovieDesc/MovieDescription ";

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(null);

  const filterByName = () => {
    // nameSearch &&
    setMoviesList(
      moviesData.filter((el) =>
        el.title.toLowerCase().startsWith(nameSearch.toLowerCase().trim())
      )
    );
  };

  const filterByRating = () => {
    ratingSearch &&
      setMoviesList(moviesData.filter((el) => el.rating === ratingSearch));
  };

  const addNewMovie = (newMovie) => {
    moviesData.push(newMovie);
    setMoviesList([...moviesList, newMovie]);
  };

  useEffect(() => {
    filterByName();
    // eslint-disable-next-line
  }, [nameSearch]);

  useEffect(() => {
    filterByRating();
    // eslint-disable-next-line
  }, [ratingSearch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Menu />
            <SearchMovie
              setNameSearch={setNameSearch}
              ratingSearch={ratingSearch}
              setRatingSearch={setRatingSearch}
            />
            <AddMovie addNewMovie={addNewMovie} />

            <MoviesList
              moviesList={moviesList}
              nameSearch={nameSearch}
              ratingSearch={ratingSearch}
            />
          </Route>

          {/* <Route path="/movie-description/:id" component={MovieDescription} /> */}
          <Route
            path="/movie-description/:id" render={(props) => <MovieDescription id={props.match.params.id} moviesList={moviesList} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
