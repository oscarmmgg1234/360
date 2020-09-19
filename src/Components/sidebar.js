import React from 'react';
import {NavLink} from "react-bootstrap";
import {Link} from "react-router-dom"
import '../ComponentsCSS/sidebar.css'

const SideBar = ({widthd}) => {
    return(
        <div style={{width: widthd,height: 1500,backgroundColor: "grey",flexDirection: "column",zIndex: 200,position:"absolute",transition: "width 650ms",boxShadow: "inset 0 0 10px #000000"}}>

        </div>
)

}

export default SideBar;