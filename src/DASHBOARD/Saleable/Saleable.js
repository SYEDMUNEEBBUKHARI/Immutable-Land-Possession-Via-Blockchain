import React from 'react';
import LandAbi from "../../LandAbi";
import web3 from "../../web3";


import socketIOClient from "socket.io-client";
import {Col,Row,Nav} from "react-bootstrap";
import {FiCopy} from "react-icons/fi"
class Saleable extends React.Component{
    state={
        endpoint: "http://127.0.0.1:5000",
        flag: false,
    
        test:[],
        count:0,
        tests:[],
        cop:"",
        copstatus:false
    }
   
    LandFunction = (da) => {
      this.setState({copstatus: true});
      console.log("counti",da);
      var out = document.getElementById(da);
     
      out.select();
      document.execCommand("copy");
      


    }
    async componentDidMount(){
        const socket = socketIOClient(this.state.endpoint);
        
        await window.ethereum.enable();
       var Acc= await web3.eth.getAccounts();
      

socket.on("ME",(data)=>{console.log("munib",data)})
socket.on("sendtonetwork",(data)=>console.log("data",data));
socket.on("chkbradcast",(so)=>{console.log("broadcast", so)});
this.viewsaleable();

}
async viewsaleable(){
    var Acc= await web3.eth.getAccounts();
    const viewfor=await LandAbi.methods.viewforsale().call({from: Acc[0]});

viewfor.map((viewfor, i) => (
    <React.Fragment>{viewfor}
    {
    this.salein(viewfor)
    
    }
    </React.Fragment>
  ))

console.log("test kru", this.state.tests[0]);
}

async salein(data){
    var Acc= await web3.eth.getAccounts();
    const salecontai=await LandAbi.methods.landInfoOwner(data).call({from: Acc[0]});
console.log("landinfo",salecontai);
let sfloors = [...this.state.tests];
sfloors.push({value: salecontai});
this.setState({tests: sfloors});

console.log("test kru", this.state.test[0]);
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
    let da=0;
        
    this.state.count=1;
    let copi;
    if(this.state.copstatus)
    {
      copi=<span>copied</span>;
    }
    return(

        <div  className="text leappadding">
      

<Row style={{width:'100%'}}>
             <Col md={4} >
             
             <ul className="colorback" >
          
              
               {
          this.state.tests.map(it => (
              
          <li className="text colorback" style={{color: "#0EAD69 "}}> {this.state.count++}) &nbsp;
          {console.log("saleable",it)}
          {
          
          it.value[2]} &nbsp; {copi}
          
        
        <input  value={ it.value[0]} name="id" id={it.value[0]+"0"} style={{MozBorderRadius:'5px'}}/>
        <button onClick={()=>{this.LandFunction(it.value[0]+"0")}}><FiCopy style={{color: 'white'}}/></button>
             &nbsp; <button className="makebt" onClick={()=>{this.makesaleable(it.value[0])}}>make Saleable</button> 
           
          
           </li> 
         

           

        
         )
         
         
         
         
         )
          
          }
        </ul>
   </Col>
           

        
       
      
       </Row>
            

        </div>
    );
    }

}
export default Saleable;