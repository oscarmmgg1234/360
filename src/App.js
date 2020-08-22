import React from 'react';
import logo from './logo.svg';
import {Navbar,Nav} from "react-bootstrap";
import {Link,BrowserRouter,Switch,Route} from "react-router-dom";
import about from "./Routes/About";
import home from "./Routes/Home";
import PW from "./Routes/Products";
import WD from "./Routes/Products";



function App() {
  return (
      <>
          <BrowserRouter>
              <Navbar bg="dark" expand="lg" variant="dark" sticky={"top"}>
          <Navbar.Brand ><img src={require('./Assets /360Logo.png')} style={styles.logo}/><Link to={"/Home"}/></Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link  eventKey={"1"} href={'/Home'}>Home</Nav.Link>
              <Nav.Link href="/Products"  >Products</Nav.Link>
              <Nav.Link href="/About" eventKey={"3"}><Link to={"/Home"}/>About</Nav.Link>
            </Nav>

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
        width: 55,
        height: 55,
        borderRadius: 70,
        marginRight: 20

    },
    Home:{
        color: "black",

}




}

export default App;
