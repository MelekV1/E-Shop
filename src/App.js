import React from 'react';
import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkpoint from "./Checkout"
import {BrowserRouter as Router,
        Switch,
        Route} from "react-router-dom"
        
function App() {
  return (
  <React.Fragment>
    <Router>
      <Switch>

        <Route path="/Checkout">
          <Header/>
          <Checkpoint/>          
        </Route>

        <Route path="/">
          <Header/>
          <Home/>
        </Route>

      </Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
