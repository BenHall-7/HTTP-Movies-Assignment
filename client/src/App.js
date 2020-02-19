import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import EditMovie from "./components/EditMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Switch>
        <Route
          path="/movies/:id"
          render={props => {
            return <Movie {...props} addToSavedList={addToSavedList} />;
          }}
        />
        <Route
          path="/update-movie/:id"
          render={props => {
            return <EditMovie {...props}/>
          }}
        />
      </Switch>
      
    </>
  );
};

export default App;
