import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home'
import NoMatch from './components/NoMatch/NoMatch'
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route exact path='/league/:id'>
              <LeagueDetails />
          </Route>
          <Route exact path='*'>
              <NoMatch/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
