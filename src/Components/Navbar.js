import React from 'react';
import {Link,BrowserRouter,Switch,Route} from "react-router-dom";
import about from "../Routes/About";
import home from "../Routes/Home";
import PW from "../Routes/Products";
import WD from "../Routes/Products";
import '../ComponentsCSS/Navbar.css';
import {Nav,Dropdown,DropdownButton,Form,FormControl,Button} from 'react-bootstrap';


export default class Navbar extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <BrowserRouter>
               <nav className={"navbar"}>
                <img src={require('../Assets /360Logo.png')}style={{width: 55,height: 55,borderRadius: 70,bordercolor: "black",borderWidth: 3}} className={"logo"}/>
                <Nav.Link href={"/Home"}>Home<Link to={"/Home"}/></Nav.Link>
                   <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                       <Dropdown.Item href="/Products/WD">Wash & Detail<Link to={"/Wash&Detail"}/></Dropdown.Item>
                       <Dropdown.Item href="/Products/PW">Polish & Wax<Link to={"/Polish&Detail"}/> </Dropdown.Item>
                   </DropdownButton>
                   <Nav.Link href={"/About"}>About<Link to={"/Home"}/></Nav.Link>
                   <Form inline>
                       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                       <Button variant="outline-dark">Search</Button>
                   </Form>

               </nav>

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


};

