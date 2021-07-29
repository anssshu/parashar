
import './App.css';

//importing the components
import Navbar from './components/Navbar';

import React from 'react';
import {BrowserRouter as  Router, Switch,Route } from 'react-router-dom';
//import all the side bar contents
import Home from "./pages/Home"
import Template from './pages/template/Template';
import Chilchila from './pages/chilchila/Chilchila';
// connect all the routes as per the SidebarData
class App extends React.Component{
  
  render()
  {
    return( 
    <>
      <Router>
        
        <Navbar/>
          <Switch>
            <Route path = "/parashar/" exact component={Home}/>
            <Route path = "/parashar/chilchila" component={Chilchila}/>
            <Route path = "/parashar/template" component={Template}/>
          </Switch>

          
        </Router>                      
    </>
    )
  }
}

export default App;
