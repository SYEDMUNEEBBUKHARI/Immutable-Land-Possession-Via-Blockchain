import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Modal,Button,Nav,NavDropdown,Navbar,Form,FormControl, NavItem} from 'react-bootstrap';
import {TiThMenu} from "react-icons/ti";
import{MdPerson} from "react-icons/md"
import Register from "./Register"


import "../navbar/login.css"

const formvalid=(formErrors)=>{
    let valid=true;
    
    Object.values(formErrors).forEach(val => val.length>0 && (valid=false));
    
    return valid;
      
    
    
    
    
    }


    
class Login extends Component{




    state = {
        showsidedraw: false,
        showsign: true,
        showRegister: false,
        password: null,
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
        flag: false,
        handleRegisterstate: false
    };
  


    

  // handleClose = () => setShow(false);
  //  handleShow = () => setShow(true);

 
    // handleRegister=()=> this.setState({showRegister: true,
    //     showsign: false});

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

    handleClose = () => this.setState({showsign: false});
handleRegister=()=>{

this.setState({
handleRegisterstate: true,
showsign: false
})

}



render(){
let takeComp;
if(this.state.handleRegisterstate)
{

  takeComp= <Register click={this.props.click} />;
}

return(
    <React.Fragment>

      

     

<Modal  show={this.state.showsign}  className=" setLogin" >
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
           <Button variant="secondary" className="chkbtn" onClick={this.props.click}>
             Close
           </Button>
           
           <Button variant="primary"  className="chkbtn" onClick={ this.handleRegister}>
             Register
           </Button>
         </Modal.Footer>
       </Modal>
       {takeComp}
    

        </React.Fragment>


);


}

}








export default Login;