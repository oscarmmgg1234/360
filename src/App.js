import React from 'react';
import {Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap";
import {Link,BrowserRouter,Switch,Route} from "react-router-dom";
import about from "./Routes/About";
import home from "./Routes/Home";
import PW from "./Routes/Products";
import WD from "./Routes/Products";

import './App.css'
import Navbar from './Components/Navbar'
import Contact from "./Routes/contact";


function App() {
  return (

        <>
            <BrowserRouter>
                <Navbar/>

                <Switch>
                    <Route path="/Home" component={home}/>e
                    <Route path="/Wash&Detail" component={WD}/>
                    <Route path="/Polish&Wax" component={PW}/>
                    <Route path="/About" component={about}/>
                    <Route path="/Contact" component={Contact}/>

                </Switch>
            </BrowserRouter>

        </>
  );
}


export default App;
