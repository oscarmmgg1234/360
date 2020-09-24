import React from 'react';
import {Link} from "react-router-dom";
import about from "../Routes/About";
import home from "../Routes/Home";
import PW from "../Routes/Products";
import WD from "../Routes/Products";
import '../ComponentsCSS/Navbar.css';
import {Nav,Dropdown,Navbar,Form,FormControl,Button,NavDropdown} from 'react-bootstrap';
import Contact from "../Routes/contact";
import '../RoutesCSS/Contact.css';


const Navbarr = ({onToggle})=>{


        return(

            <>

               <nav className={"navbar"} >
                   <button className={"DrawerContainer"} onClick={onToggle} >
                       <div className={"line"} />
                       <div className={"line"}/>
                       <div className={"line"}/>

                   </button>
                <img src={require('../Assets /360Logo.png')} id={"logo1"}/>
                <Nav className={"mr-auto"} >
                <Nav.Link href={"/"}  id={"navLinks"} >Home<Link to={"/"}/></Nav.Link>
                   <NavDropdown title="Products"  id={"navLinks"}>
                       <Dropdown.Item href="/Products/WD">Wash & Detail<Link to={"/Wash&Detail"}/></Dropdown.Item>
                       <Dropdown.Item href="/Products/PW">Polish & Wax<Link to={"/Polish&Detail"}/> </Dropdown.Item>
                   </NavDropdown>
                   <Nav.Link href={"/About"} id={"navLinks"} >About<Link to={"/Home"}/></Nav.Link>

                </Nav>


                   <Nav.Link id={"navLinks"} href={"/Contact"}>Contact Us<Link to={"/Contact"}/></Nav.Link>

                   <img src={require('../Assets /360Logo.png')} id={"logo"}/>


               </nav>

            </>
        );

};

export default Navbarr;