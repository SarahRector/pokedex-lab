import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Search from './SearchPage/Search.js';
import './App.css';
import DetailsPage from './DetailsPage';

export default class App extends React.Component {
  render() {
    return (
      <>
      <div className='box'>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Search {...routerProps} />}
            />
            <Route
              path="/detail/:myPokemonId"
              exact
              render={(routerProps) => <DetailsPage {...routerProps} />}
            /> 
          </Switch>
        </Router>
      </div>
      </>
    )
  }
}


