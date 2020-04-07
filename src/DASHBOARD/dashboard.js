
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import {Image,Modal,Alert,Col,Row,Button,Nav,Container,DropdownButton,Dropdown,NavDropdown,Navbar,Form,FormControl, NavItem} from 'react-bootstrap';
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
import Drawer from "./Drawer";
import Header from "./Header"
class dashboard extends Component{


    state={

        logout: false,
        store: "hiiii",
        Emaild: "",
        Named:"",
        ipfsHashd: "",
        loggin: false,
        showdrawer: false,
        showflex: 'setflex'
        
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

    
  drawerclickhand=(prevstate)=>{
      
    
       this.setState((prevstate)=>{
           if(prevstate.showdrawer){
                return {showdrawer: false}
           }
           else{
               return {showdrawer: true}

           }
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
    let sidebar;
    let showflex='setflex';
   if(this.state.showdrawer){
 sidebar= <Drawer click={'setAlign'} />;
 showflex='setflexx';
 
     }
     else{

        sidebar= <Drawer click={'setAlig'} />;

     }
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
<Container>
            
            <Navbar   fixed="top"  collapseOnSelect expand="xxl"  >
            
            <Button bsPrefix="chkbtn"  position= "fixed"  onClick={this.drawerclickhand} ><TiThMenu className="iconsy" /></Button>
            {/* <Image src={Logo}  width= '55px' height='35px'/> */}
           
            <Navbar.Collapse id="responsive-navbar-nav">
              
            <div>
           <DropdownButton bsPrefix="btnsetting "  title={ this.state.Named }>
  <Dropdown.Item as="button"><GoDashboard  className="signup"  />DASHBOARD</Dropdown.Item>
  <Dropdown.Item as="button"><GiIsland className="signup"  />Register Land</Dropdown.Item>
  <Dropdown.Item as="button" onClick={this.runLogout}><MdPerson className="signup"  />  Logout</Dropdown.Item>
</DropdownButton>
              

             
            
            </div>
           
            </Navbar.Collapse>

           
            
           
             </Navbar>  
             </Container>
             

<br></br>
<br></br>

    {sidebar}
   
    <div className={showflex}>
    555
</div>
    
    
   
   
{/* <Header /> */}

<br></br>

          


            
        </React.Fragment>
        </Router>

        );
}


}

export default dashboard;