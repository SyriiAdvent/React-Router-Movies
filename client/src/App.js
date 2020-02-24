import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Movie from "./Movies/Movie";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
      <div>
        <SavedList list={savedList} />
        <div>Replace this Div with your Routes</div>
        <Route exact path="/" />
        <Route path="/MovieList" />
        <Route path="/movies/:id" component={Movie} />

        <MovieList />
      </div>
  );
};

export default App;
