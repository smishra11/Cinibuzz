import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MovieDetails from './components/Movie/MovieDetails';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* <Homepage /> */}
        <Route path="/movie_id:slug" component={MovieDetails} />
      </Switch>
    </Router>
  );
}

export default App;
