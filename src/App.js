import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MovieDetails from './components/Movie/MovieDetails';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/movie_id:slug">
          <Navbar />
          <MovieDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
