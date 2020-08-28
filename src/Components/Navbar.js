import React from 'react';
import {Link,BrowserRouter,Switch,Route} from "react-router-dom";
import about from "../Routes/About";
import home from "../Routes/Home";
import PW from "../Routes/Products";
import WD from "../Routes/Products";
import '../ComponentsCSS/Navbar.css';
import {Nav,Dropdown,Navbar,Form,FormControl,Button,NavDropdown} from 'react-bootstrap';
import Contact from "../Routes/contact";

export default class Navbarr extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <BrowserRouter>
               <nav className={"navbar"}>
                <img src={require('../Assets /360Logo.png')}style={{width: 55,height: 55,borderRadius: 70,bordercolor: "black",borderWidth: 3}} className={"logo"}/>
                <Nav className={"mr-auto"} >
                <Nav.Link href={"/Home"}  id={"navLinks"} >Home<Link to={"/Home"}/></Nav.Link>
                   <NavDropdown title="Products"  id={"navLinks"}>
                       <Dropdown.Item href="/Products/WD">Wash & Detail<Link to={"/Wash&Detail"}/></Dropdown.Item>
                       <Dropdown.Item href="/Products/PW">Polish & Wax<Link to={"/Polish&Detail"}/> </Dropdown.Item>
                   </NavDropdown>
                   <Nav.Link href={"/About"} id={"navLinks"}>About<Link to={"/Home"}/></Nav.Link>

                </Nav>
                   <Navbar.Brand style={{color: "darkgray",fontSize:30,marginRight: 450}}>JS AUTO DETAIL SUPPLIES</Navbar.Brand>

                   <Form inline>
                       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                       <Button variant="outline-dark" style={{color: "aquamarine"}}> Search</Button>
                   </Form>
                   <Nav.Link id={"navLinks"} href={"/Contact"}>Contact Us<Link to={"/Contact"}/></Nav.Link>

               </nav>

                    <Switch>
                        <Route path="/Home" component={home}/>
                        <Route path="/Wash&Detail" component={WD}/>
                        <Route path="/Polish&Wax" component={PW}/>
                        <Route path="/About" component={about}/>
                        <Route path="/Contact" component={Contact}/>
                    </Switch>
                </BrowserRouter>
            </>
        );
    }


};

