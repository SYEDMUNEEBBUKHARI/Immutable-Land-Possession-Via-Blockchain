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
import "../navbar/navbar.css"

const formvalid=(formErrors)=>{
let valid=true;

Object.values(formErrors).forEach(val => val.length>0 && (valid=false));

return valid;
  




}

class AlertDismissible extends Component {
    state = {
        showsidedraw: false,
        showsign: false,
        showRegister:false,
        password: null,
        formErrors:{

          password:""
        }
    };
handelchange=(event)=>{
event.preventDefault;
const {name, value}=event.target;
let formErrors= this.state.formErrors;
console.log('name', name);
console.log('value', value);


switch(name){

  case 'password':
    formErrors.password= value.length>0 && value.length<5 ? "must be more than 5": " its ok"
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
   backdropclick =()=>
   {this.setState({showsidedraw: false})};
    
   sdmd=()=>{
       this.setState({showsign: true});
   }
render(){
let backdraw;
if(this.state.showsidedraw){
    backdraw =  <Backdrop click={this.backdropclick}  />;
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
            
            
            <div><Button bsPrefix="btnsetting " className="btnsetting border border-dark"    onClick={this.handleShow}><MdPerson className="signup"  />  Sign-in</Button>
            </div></Navbar>  
            

           
          



<Modal show={this.state.showsign} onHide={this.handleClose}>
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
     <Form.Control type="password" name="password" onChange={this.handelchange} placeholder="Password" />
  {this.state.formErrors.password.length>0 && (<span className="clralert">{this.state.formErrors.password}</span>)}
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
       </Modal>






       <Modal dialogClassName="my-modal" show={this.state.showRegister} onHide={this.handleRegClose}>
        <Modal.Header bsPrefix="modal-header " className="d-block" >
         <Modal.Title ><MdPerson className="signup2" /> Register</Modal.Title>
         </Modal.Header>
         <Modal.Body>
          
           <Form>


           <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="file" placeholder="Password" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" className="chkbtn" type="submit">
    Submit
  </Button>
</Form>
 </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={this.handleRegClose} className="chkbtn">
             Close
           </Button>
           
         </Modal.Footer>
       </Modal>
      </React.Fragment>



);
  }
  }
  




export default AlertDismissible;
