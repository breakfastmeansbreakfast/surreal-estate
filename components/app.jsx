import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import AddProperty from './AddProperty';
import Properties from './Properties';

const App = () => (
  <div id="App">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Properties} />
      <Route exact path="/add-property" component={AddProperty} />
    </Switch>
  </div>
);

export default App;
