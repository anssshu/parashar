
import './App.css';

//importing the components
import Navbar from './components/Navbar';

import React from 'react';
import {BrowserRouter as  Router, Switch,Route } from 'react-router-dom';
//import all the side bar contents
import Home from "./pages/Home"
import Template from './pages/template/Template';
import Chilchila from './pages/chilchila/Chilchila';
import Shoshia from './pages/shoshia/Shoshia';
import Karpa from './pages/karpa/Karpa';
import Putiachura from './pages/putiachura/Putiachura';
import Farang from "./pages/farang/Farang"
import Chhendia from "./pages/chhendia/Chhendia"
import Totraguda from "./pages/totraguda/Totraguda"
import Panjia from "./pages/panjia/Panjia"
import Bhejiguda from "./pages/bhejiguda/Bhejiguda"
import Umer from "./pages/umer/Umer"
import Bhainri from "./pages/bhainri/Bhainri"
import Arebeda from "./pages/arebeda/Arebeda"
import Grindol from "./pages/grindol/Grindol"
import Chichia from "./pages/chichia/Chichia"
import Golamunda from "./pages/golamunda/Golamunda"
import Khamarhaldi from "./pages/khamarhaldi/Khamarhaldi"
import Merghara from "./pages/merghara/Merghara"
import Parla from "./pages/parla/Parla"
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
            <Route path = "/parashar/shoshia" component={Shoshia}/>
            <Route path = "/parashar/karpa" component={Karpa}/>
            <Route path = "/parashar/putiachura" component={Putiachura}/>
            <Route path = "/parashar/farang" component={Farang}/>
            <Route path = "/parashar/chhendia" component={Chhendia}/>
            <Route path = "/parashar/totraguda" component={Totraguda}/>
            <Route path = "/parashar/panjia" component={Panjia}/>
	    <Route path = "/parashar/bhejiguda" component={Bhejiguda}/>
	    <Route path = "/parashar/umer" component={Umer}/>
	    <Route path = "/parashar/bhainri" component={Bhainri}/>
            <Route path = "/parashar/arebeda" component={Arebeda}/>
	    <Route path = "/parashar/grindol" component={Grindol}/>
	    <Route path = "/parashar/chichia" component={Chichia}/>
 	    <Route path = "/parashar/golamunda" component={Golamunda}/>
   	    <Route path = "/parashar/khamarhaldi" component={Khamarhaldi}/>  
	    <Route path = "/parashar/merghara" component={Merghara}/>
	    <Route path = "/parashar/parla" component={Parla}/>       

          </Switch>

          
        </Router>                      
    </>
    )
  }
}

export default App;
