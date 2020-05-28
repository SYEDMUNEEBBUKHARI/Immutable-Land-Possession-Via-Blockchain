import React from 'react';
import LandAbi from "../LandAbi";
import web3 from "../web3";
import "./land.css"
import {GiIsland} from "react-icons/gi";
import socketIOClient from "socket.io-client";
import {Navbar,Image,Col,Row,Nav,NavDropdown} from "react-bootstrap";
import {FiCopy} from "react-icons/fi";
import SaleLand from "./Saleable/Saleable";
class Landview extends React.Component{
    state={
        Account: "",
        Asset: [],
        count: 0,
        itemlist: "",
        endpoint: "http://127.0.0.1:5000",
        flag: false,
        salelist: [],
        test:[],
        count:0,
        testforsale:[]
    }
    
    LandFunction = (da) => {
      
      var out = document.getElementById(da);
     
      out.select();
      document.execCommand("copy");
      


    }
    async componentDidMount(){
        const socket = socketIOClient(this.state.endpoint);
        
        await window.ethereum.enable();
       var Acc= await web3.eth.getAccounts();
       console.log("ACCo", Acc);
    this.setState({Account: Acc});
const Asse= await LandAbi.methods.viewAssets().call({from: Acc[0]});
this.setState({Asset: Asse});
// console.log("Assets",this.Asset);
// const endpoint = this.state.endpoint;
// const saleableLands= await LandAbi.methods.viewforsale().call({from: Acc[0]});
// console.log("saleableLands",saleableLands);

Asse.map((Asse, i) => (
    <React.Fragment>{Asse}
    {
    this.landinfo(Asse)
    
    }
    </React.Fragment>
  ))



socket.on("ME",(data)=>{console.log("munib",data)})
socket.on("sendtonetwork",(data)=>console.log("data",data));
socket.on("chkbradcast",(so)=>{console.log("broadcast", so)});


}




async landinfo(data){
    var Acc= await web3.eth.getAccounts();
    const contai=await LandAbi.methods.landInfoOwner(data).call({from: Acc[0]});
console.log("landinfo",contai);
let floors = [...this.state.test];
floors.push({value: contai});
this.setState({test: floors});

console.log("test kru", this.state.test[0]);
}
async makesaleable(data){
    //  const socket = socketIOClient(this.state.endpoint);
    console.log(":datata",data);
     var Acc= await web3.eth.getAccounts();
    const value=  await LandAbi.methods.makeSaleable(data).send({from: Acc[0]});
    console.log("valwe", value);
    
    // socket.emit("sale", data);
    
}



// async chkcity(){
//     var Acc= await web3.eth.getAccounts();
//    const resultcity= await LandAbi.methods.checkcompanyportal().call({from: Acc[0]});
// console.log("resultcity",resultcity);
// }

render(){
    
        
    this.state.count=1;
    return(

        <div  className="text leappadding">
            
       <span > Your MetaMask Id: </span>   <span style={{color: "orange"}}>{this.state.Account}</span>
            <br></br>
            <br></br>
            <br></br>

{/* <button onClick={this.chkcity}>click</button> */}
<div style={{textAlign:'center'}}>Land Details</div>

<Row style={{width:'100%'}}>
             <Col md={4} >
             
             <ul className="colorback" >
          
              
               {
          this.state.test.map(item => (
              
          <li className="text colorback" style={{color: "#0EAD69 "}}> {this.state.count++}) &nbsp;
          {console.log("saleable",item)}
          {
          
          item.value[2]} &nbsp; 
          
        <input  value={ item.value[0]} name="id" id={item.value[0]} style={{MozBorderRadius:'5px'}}/>
        <button onClick={()=>{this.LandFunction(item.value[0])}}><FiCopy style={{color: 'white'}}/></button>
             &nbsp; <button className="makebt" onClick={()=>{this.makesaleable(item.value[0])}}>make Saleable</button> 
           
          
          
           </li> 
         

           

        
         )
         
         
         
         
         )
          
          }
        </ul>
   </Col>
           

        
       
      
       </Row>

            
       <br></br>
            <br></br>

{/* <button onClick={this.chkcity}>click</button> */}
<div style={{textAlign:'center'}}  id="viewLand">Saleable Lands </div>

<SaleLand />

{/* <Row style={{width:'100%'}}>
             <Col md={4} >
             
             <ul className="colorback" >
          
              
               {
          this.state.testforsale.map(item => (
              
          <li className="text colorback" style={{color: "#0EAD69 "}}> {this.state.count++}) &nbsp;
          {console.log("saleable",item)}
          {
          
          item.value[2]} &nbsp; 
          
        <input  value={ item.value[0]} name="id" id={item.value[0]} style={{MozBorderRadius:'5px'}}/>
        <button onClick={()=>{this.myFunction(item.value[0])}}><FiCopy style={{color: 'white'}}/></button>
             &nbsp; <button className="makebt" onClick={()=>{this.makesaleable(item.value[0])}}>make Saleable</button> 
           
          
           </li> 
         

           

        
         )
         
         
         
         
         )
          
          }
        </ul>
   </Col>
           

        
       
      
       </Row> */}
            

        </div>
    );
    }

}
export default Landview;