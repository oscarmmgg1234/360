import React from 'react';
import {Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap";
import {Link,BrowserRouter,Switch,Route} from "react-router-dom";
import about from "./Routes/About";
import home from "./Routes/Home";
import PW from "./Routes/Products";
import WD from "./Routes/Products";
import './App.css'
import Navbar from './Components/Navbar'



function App() {
  return (
      <Navbar/>
  );
}



let styles = {
    logo:{
        width: 50,
        height: 50,
        borderRadius: 70


    },
    NavLinks:{
        fontSize: 22,



    },




}

export default App;
