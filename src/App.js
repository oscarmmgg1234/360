import React from 'react';
import logo from './logo.svg';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap";
import {Link,BrowserRouter,Switch,Route} from "react-router-dom";
import about from "./Routes/About";
import home from "./Routes/Home";
import PW from "./Routes/Products";
import WD from "./Routes/Products";
import './App.css'



function App() {
  return (
      <>
          <BrowserRouter>
              <Navbar bg="dark" expand="sm" variant="dark" className={"navbarr"}>
          <Navbar.Brand ><img src={require('./Assets /360Logo.png')} style={styles.logo}/><Link to={"/Home"}/></Navbar.Brand>
                  <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link  eventKey={"1"} href={'/Home'} style={styles.NavLinks}>Home</Nav.Link>
              <NavDropdown title={"Product"} id={"basic-nav-dropdown"} style={styles.NavLinks}>
                  <NavDropdown.Item href={"WD"}><Link to={"/WD"}>Wash & Detail</Link></NavDropdown.Item>
                  <NavDropdown.Item href={"PW"}><Link to={"/PW"}>Polish</Link></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/About" eventKey={"3"} style={styles.NavLinks}><Link to={"/Home"}/>About</Nav.Link>

            </Nav>
                  <Form inline style={styles.form}>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
              </Form>
                  </Navbar.Collapse>
      </Navbar>


              <Switch>
                  <Route path="/Home" component={home}/>
                  <Route path="/Wash&Detail" component={WD}/>
                  <Route path="/Polish&Wax" component={PW}/>
                  <Route path="/About" component={about}/>
              </Switch>

          </BrowserRouter>
    </>

  );
}

let styles = {
    logo:{
        width: 50,
        height: 50,
        borderRadius: 70,


    },
    NavLinks:{
        fontSize: 22,


    },
    form:{

    }




}

export default App;
