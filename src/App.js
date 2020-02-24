import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'css/App.css';
import Header from 'components/header';
import Home from 'pages/home';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/" render={(props) => <Home {...props} />}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
