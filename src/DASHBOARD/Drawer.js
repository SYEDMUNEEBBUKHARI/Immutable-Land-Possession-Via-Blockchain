import React,{Component} from 'react';
import  "./Drawer.css"
import {Image,Modal,Alert,Col,Row,Button,Nav,Container,DropdownButton,Dropdown,NavDropdown,Navbar,Form,FormControl, NavItem} from 'react-bootstrap';
import {TiThMenu} from "react-icons/ti";
import {Link} from "react-router-dom"
import {FaDotCircle} from "react-icons/fa"
import Logo from "./Siacoin_logo_green.svg"
import {FiUserCheck as User} from "react-icons/fi"
import {GoDashboard} from "react-icons/go"
import {AiOutlineFileSearch} from "react-icons/ai"
import {FiSettings} from "react-icons/fi"
import {GiIsland} from "react-icons/gi";
import {AiOutlineDashboard} from "react-icons/ai"
import {FaPagelines} from "react-icons/fa"

import{MdPerson} from "react-icons/md"
import styled from 'styled-components';





class Drawer extends Component{

render(){

    return(
        




       
<div className={this.props.click}>

<br></br>
<br></br>

<br></br>

<a className="adjust  "><AiOutlineDashboard  className="adjustColors" /> <span className="dishide">  Dashboard </span> </a> <br></br>
<br></br>

<a className="adjust " ><FaPagelines  className="adjustColors"  />  <span className="dishide"> Registration </span>  </a>  <br></br>
<br></br>

<a className="adjust " ><AiOutlineFileSearch className="adjustColors"  /> <span className="dishide">Search</span>  </a>   <br></br>
<br></br>

<a className="adjust " ><GiIsland className="adjustColors"  /> <span className="dishide">Land Details </span>     </a> <br></br>
<br></br>

<a className="adjust " ><FiSettings className="adjustColors"  />  <span className="dishide">Settings </span>  </a>  <br></br>








</div>







    );
}
}





export default Drawer;