import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PageRaiz from './Raiz';
import PageNota from './Nota';
import PageLogin from './Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={PageLogin} />
        <Route path="/nota/:id" component={PageNota} />
        <Route path="/" component={PageRaiz} />
      </Switch>
    </Router>
  );
}

export default App;
