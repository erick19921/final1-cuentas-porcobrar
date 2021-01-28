import React from 'react';
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/login';
import Dashboard from './components/Dashboard';
import Nuevo from './components/Nuevo';



function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render={props => (<Login{...props} />)}></Route>
            <Route path="/Dashboard" exact render={props => (<Dashboard{...props} />)}></Route>
            <Route path="/Nuevo" exact render={props => (<Nuevo{...props} />)}></Route>


          </Switch>

      </Router>

    </React.Fragment>
  );
}

export default App;
