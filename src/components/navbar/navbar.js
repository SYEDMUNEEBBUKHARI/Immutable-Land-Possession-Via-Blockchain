import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import {Modal,Alert,Col,Row,Button,Nav,NavDropdown,Navbar,Form,FormControl, NavItem} from 'react-bootstrap';
import {TiThMenu} from "react-icons/ti";
import{MdPerson} from "react-icons/md"
import Sidebar from "../../components/navbar/sidedraw"
import Backdrop from "../navbar/backdrop"
import Sdraw from "./sidedraw"
import Load from "../container/mainload"
import SideMod from "../navbar/signupmod"
import "../navbar/navbar.css";
import axios from 'axios';
import ipfs from '../../ipfs';
import Login from './Login';
// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Link = require("react-router-dom").Link;
// import Login from '../navbar/login';


const formvalid=(formErrors)=>{
let valid=true;

Object.values(formErrors).forEach(val => val.length>0 && (valid=false));

return valid;
  




}



class AlertDismissible extends Component {

  SubmitData5 =this.SubmitData5.bind(this);
   

    state = {
        showsidedraw: false,
        showsign: false,
        showRegister: false,
        password: null,
        showcomponent: false ,
        shown: false,
        Name: "",
        Password: "",
        Email:"",
        Address: "",
        City: "",
        Country: ""
        , ipfsHash: "",
        buffer: ""
        ,
        formErrors:{

          password:" "
        },
        flag: false
    };
  
  

updateName=(e)=>{
  e.preventDefault();
  const{Name, value}=e.target;
  console.log('name', Name);
console.log('value', value);
this.setState({Name: e.target.value});
}

updateEmail=(e)=>{
  e.preventDefault();
  const{Email, value}=e.target;
  console.log('Email', Email);
console.log('value', value);
this.setState({Email: e.target.value});
}
updatePassword=(e)=>{
  e.preventDefault();
  const{Password, value}=e.target;
  console.log('Password', Password);
console.log('value', value);
this.setState({Password: e.target.value});
}
updateCity=(e)=>{
  e.preventDefault();
  const{City, value}=e.target;
  console.log('City', City);
console.log('value', value);
this.setState({City: e.target.value});
}
updateCountry=(e)=>{
  e.preventDefault();
  const{Country, value}=e.target;
  console.log('Country', Country);
console.log('value', value);
this.setState({Country: e.target.value});
}



updateAddress=(e)=>{
  e.preventDefault();
  const{Address, value}=e.target;
  console.log('Address', Address);
console.log('value', value);
this.setState({Address: e.target.value});
}

SubmitData5 (e) {

e.preventDefault();
ipfs.files.add(this.state.buffer,(error, result)=>{
if(error)
{
  console.error("error");
}
console.log('result',result[0].path);

this.setState({ipfsHash: result[0].path});

})


console.log("this.state.ipfsHash", this.state.ipfsHash);

console.log(this.state.ipfsHash);

const finaldata = {

Name: this.state.Name,
Email: this.state.Email,
password: this.state.password,

City: this.state.City,

Country: this.state.Country,
Address: this.state.Address
,ipfsHash: this.state.ipfsHash
}

axios.post("http://localhost:5000/Register/add", finaldata).
then(res=>{console.log(res.data)});

this.setState({

  Name: " ",
  Password: " ",
  Email:" ",
  Address: " ",
  City: " ",
  Country: " ",
ipfsHash: " "

});

}



captureFile=(event)=>{
console.log("Capture File");
event.preventDefault();
const file= event.target.files[0];
const reader= new window.FileReader();
reader.readAsArrayBuffer(file);
reader.onloadend=()=>{
  this.setState({buffer: Buffer(reader.result)});
  console.log('buffer',this.state.buffer);
}
}
handelchange=(event)=>{
event.preventDefault;
const {name, value}=event.target;
let formErrors= this.state.formErrors;
console.log('name', name);
console.log('value', value);


switch(name){

  case 'password':
    
     if(value.length>=0 && value.length<5) 
    
    {formErrors.password="must be more than 5";
  
    this.state.flag=false;
  
  }
    else{ `${this.state.flag=true}
    
    ${this.state.formErrors.password= ""}
    
    `}
break;
default:
  break;

}

this.setState({formErrors, [name]: value},()=>{console.log("state chaangeeee", this.state.formErrors);});
}

handelsubmit = (event)=>{
  event.preventDefault();

if(formvalid(this.state.formErrors))
{

console.log(`
--submitting--

Password: ${this.state.password}


`);



}
else{
  console.error("Form invalid");
}
}






    handleRegister=()=> this.setState({showRegister: true,
    showsign: false});
    handleRegClose=()=>this.setState({showRegister: false});
     handleClose = () => this.setState({showsign: false});
   handleShow = () => this.setState({showsign: true});

   drawerclickhand=()=>{
       this.setState((prevstate)=>{

        return {showsidedraw: !prevstate.showsidedraw}
       });
   }

   showComponentHandler=()=>{


    this.setState((prevstate)=>{
if(prevstate.showcomponent)
{
 return {showcomponent: false}

}
else{
 return {showcomponent: true}

}
      
     });
   }




   backdropclick =()=>
   {this.setState({showsidedraw: false})};
    
   sdmd=()=>{
       this.setState({showsign: true});
   }
   makefalse=()=>{
     this.setState({showcomponent: false})
   }
render(){
let backdraw;
if(this.state.showsidedraw){
    backdraw =  <Backdrop click={this.backdropclick}  />;
}

let logind;
if(this.state.showcomponent)
{
logind=<Login  click={this.makefalse}/>;

}



let signmodel;
if(this.state.showsign){
    signmodel =  <SideMod   />;
}
  return (

    <React.Fragment>
        
    
         

    
            <Navbar   fixed="top"  collapseOnSelect expand="xxl"  >
            {backdraw}
   
            <Button bsPrefix="chkbtn"  position= "fixed"  onClick={this.drawerclickhand} ><TiThMenu className="iconsy" /></Button>
            <Navbar.Collapse id="responsive-navbar-nav">
              
            
           
            </Navbar.Collapse>

            <Sdraw show={this.state.showsidedraw} />
            
            <div>
              
              <Button bsPrefix="btnsetting " className="btnsetting border border-dark"  onClick={this.showComponentHandler}
            ><MdPerson className="signup"  />  Sign-in</Button>

            
            </div>
            
           {logind}
            </Navbar>  
            
            

            



{/* <Modal show={this.state.showsign} onHide={this.handleClose}>
        <Modal.Header bsPrefix="modal-header" className="d-block">
          <Modal.Title><MdPerson className="signup2"  /> Sign-in</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <form >
           <Form>
   <Form.Group controlId="formBasicEmail">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" placeholder="Enter email" />
     <Form.Text className="text-muted">
       We'll never share your email with anyone else.
     </Form.Text>
   </Form.Group>

   <Form.Group controlId="formBasicPassword">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" name="password" onChange={this.handelchange}      placeholder="Password" />
  {this.state.formErrors.password.length>0 && (<span className="clralert">{this.state.formErrors.password}</span>)}
{this.state.flag== true  && (<span className="MakeGreen">oka</span>)}
  
   </Form.Group>


   
   <Form.Group controlId="formBasicCheckbox">
     <Form.Check type="checkbox" label="Check me out" />
   </Form.Group>
      <Button variant="primary" className="chkbtn"  onSubmit={this.handelsubmit}>
    Submit
   </Button>
 </Form>
 </form>
 </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" className="chkbtn" onClick={this.handleClose}>
             Close
           </Button>
           <Button variant="primary" className="chkbtn" onClick={this.handleRegister}>
             Register
           </Button>
         </Modal.Footer>
       </Modal> */}



                                {/* Register */}


       {/* <Modal dialogClassName="my-modal" show={this.state.showRegister} onHide={this.handleRegClose}>
        <Modal.Header bsPrefix="modal-header " className="d-block" >
         <Modal.Title ><MdPerson className="signup2" /> Register</Modal.Title>
         </Modal.Header>
         <Modal.Body>
          
           <Form onSubmit={this.SubmitData5}>


           <Form.Row>
    <Form.Group as={Col} >
      <Form.Label>Name</Form.Label>
      <Form.Control  value={this.state.Name} 
     onChange={this.updateName.bind(this)} 
      placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Image</Form.Label>
      <Form.Control type="file" placeholder="Password"  onChange={this.captureFile} />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email"   
      value={this.state.Email} 
      onChange={this.updateEmail.bind(this)}   placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" 
value={this.state.Password} 
onChange={this.updatePassword.bind(this)}        placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group  as={Col} controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control               value={this.state.Address} 
     onChange={this.updateAddress.bind(this)}  placeholder="1234 Main St" />
  </Form.Group>

  

  <Form.Row>
  <Form.Group as={Col} controlId="formGridCountry">
    <Form.Label>Country</Form.Label>
    <Form.Control placeholder=""   
    value={this.state.Country} 
    onChange={this.updateCountry.bind(this)} 
    />
    
  </Form.Group>
  <Form.Group controlId="formGridCity" >
    <Form.Label>City</Form.Label>
    <Form.Control      value={this.state.City} 
     onChange={this.updateCity.bind(this)}      placeholder="" />
  </Form.Group>
    
  </Form.Row>

 

  <Button variant="primary"  className="chkbtn" type="submit" >
    Submit
  </Button>
</Form>
 </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={this.handleRegClose} className="chkbtn">
             Close
           </Button>
           
         </Modal.Footer>
       </Modal> */}
      </React.Fragment>



);
  }
  }
  




export default AlertDismissible;
