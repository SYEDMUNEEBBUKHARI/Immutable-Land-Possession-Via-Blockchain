
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import {Image,Modal,Alert,Col,Row,Button,Nav,DropdownButton,Dropdown,NavDropdown,Navbar,Form,FormControl, NavItem} from 'react-bootstrap';
import {TiThMenu} from "react-icons/ti";
import {FaDotCircle} from "react-icons/fa"
import{MdPerson} from "react-icons/md"
import {Switch, Route,Router as Router,Redirect} from "react-router-dom"
import history from '../Services/history';
import Logo from "./Siacoin_logo_green.svg"
import {FiUserCheck as User} from "react-icons/fi"
import {GoDashboard} from "react-icons/go"
import {GiIsland} from "react-icons/gi";

import "./dashboard.css";

import {browserHistory} from "react-router";
import App from '../App';
import ipfs from '../ipfs';

import Header from "./Header"
class dashboard extends Component{


    state={

        logout: false,
        store: "hiiii",
        Emaild: "",
        Named:"",
        ipfsHashd: "",
        loggin: false
        
        }
        

  componentDidMount(){
      
    const Email=  localStorage.getItem("Email");
    const Name=  localStorage.getItem("Name");
    const ipfsHash =  localStorage.getItem("ipfsHash");
    this.setState({
Emaild: Email,
Named: Name,
ipfsHashd: ipfsHash



    });


    
   }

    



    runLogout=()=>{
       

console.log("logging out ");

        localStorage.removeItem('token');
        localStorage.removeItem('Name');
        localStorage.removeItem('Email');
        localStorage.removeItem('ipfsHash');

        
        this.setState({loggin: true})
        

    }


       

render(){

    
    console.log("property",this.props.location);

console.log("Emailil", localStorage.getItem("Name"));

    
    console.log("Email aya",this.state.Email);

console.log(this.props);
    if(this.state.loggin){
       return <Route path="/" component={App}  />

    }

    return(
        <Router history={history}>

        
        <React.Fragment>

        <Switch>

<Route exact path="/" component={App} />






</Switch>
            
            <Navbar   fixed="top"  collapseOnSelect expand="xxl"  >
            
   
            <Image src={Logo}  width= '55px' height='35px'/>
           
            <Navbar.Collapse id="responsive-navbar-nav">
              
            
           
            </Navbar.Collapse>

           
            
            <div>
           <DropdownButton bsPrefix="btnsetting "  title={ this.state.Named }>
  <Dropdown.Item as="button"><GoDashboard  className="signup"  />DASHBOARD</Dropdown.Item>
  <Dropdown.Item as="button"><GiIsland className="signup"  />Register Land</Dropdown.Item>
  <Dropdown.Item as="button" onClick={this.runLogout}><MdPerson className="signup"  />  Logout</Dropdown.Item>
</DropdownButton>
              

             
            
            </div>
             </Navbar>  

<br></br>
<br></br>

         
<Header />
<br></br>

            <div className="setfont">Land Records</div>
        </React.Fragment>
        </Router>

        );
}


}

export default dashboard;