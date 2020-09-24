import React, {useEffect} from 'react';
import {Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap";
import {Link,BrowserRouter,Switch,Route} from "react-router-dom";
import about from "./Routes/About";
import home from "./Routes/Home";
import PW from "./Routes/Products";
import WD from "./Routes/Products";

import './App.css'
import Navbar from './Components/Navbar'
import Contact from "./Routes/contact";
import SideBar from "./Components/sidebar";


function App() {
    const [toggle,setToggle] = React.useState(false);
    const [widthh,setWidthh] = React.useState(0)

    useEffect(()=>{if(toggle){
        setWidthh(200)
    }
    if(!toggle){
        setWidthh(0)
    }
    },[toggle])

  return (

        <>

            <BrowserRouter>

                <Navbar onToggle={()=>setToggle(!toggle)}  />


                <SideBar widthd={widthh} />
                <Switch>
                    <Route path="/" component={home}/>
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
