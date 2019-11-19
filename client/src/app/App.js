import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect,} from "react-router-dom";
import '../css/App.css';
import Start from "../components/start-page";
import Chat from "../components/chat UI/chat";
import PrivateRoute from "../components/private.route";

const App = ()=>{
  return (
    <Router>
        <Switch>
          <Route path="/homepage/" component={Start}/>
          <PrivateRoute path='/chat/:username' component={Chat}/>
          <Route path="*">
            <Redirect exact to='/homepage/introduction'/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
