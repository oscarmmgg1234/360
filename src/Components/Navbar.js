import React from 'react';
import {Link} from "react-router-dom";
import about from "../Routes/About";
import home from "../Routes/Home";
import PW from "../Routes/Products";
import WD from "../Routes/Products";
import '../ComponentsCSS/Navbar.css';
import {Nav,Dropdown,Navbar,Form,FormControl,Button,NavDropdown} from 'react-bootstrap';
import Contact from "../Routes/contact";
import '../RoutesCSS/Contact.css'

export default class Navbarr extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
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

                   <Form inline>
                       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                       <Button variant="outline-dark" style={{color: "red"}}> Search</Button>
                   </Form>
                   <Nav.Link id={"navLinks"} href={"/Contact"}>Contact Us<Link to={"/Contact"}/></Nav.Link>

               </nav>

            </>
        );
    }


};

