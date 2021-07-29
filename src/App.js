
import './App.css';

//importing the components
import Navbar from './components/Navbar';

import React from 'react';
import {BrowserRouter as  Router, Switch,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Reports from './pages/Reports';


class App extends React.Component{
  
  render()
  {
    return( 
    <>
      <Router>
        
        <Navbar/>
          <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/reports" component={Reports}/>
          </Switch>

          
        </Router>                      
    </>
    )
  }
}

export default App;
