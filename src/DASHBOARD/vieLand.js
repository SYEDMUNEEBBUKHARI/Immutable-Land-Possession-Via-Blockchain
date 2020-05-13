import React from 'react';
import LandAbi from "../LandAbi";
import web3 from "../web3";
import "./land.css"
import {GiIsland} from "react-icons/gi";
import socketIOClient from "socket.io-client";

class Landview extends React.Component{
    state={
        Account: "",
        Asset: [],
        count: 0,
        itemlist: "",
        endpoint: "http://127.0.0.1:5000",
        flag: false,
        salelist: []
    }
    
    async componentDidMount(){
        const socket = socketIOClient(this.state.endpoint);
        
        await window.ethereum.enable();
       var Acc= await web3.eth.getAccounts();
       console.log("ACC", Acc);
    this.setState({Account: Acc});
const Asse= await LandAbi.methods.viewAssets().call({from: Acc[0]});
this.setState({Asset: Asse});
console.log("Assets",this.Asset);
const endpoint = this.state.endpoint;
socket.on("ME",(data)=>{console.log("munib",data)})
socket.on("sendtonetwork",(data)=>console.log("data",data));
socket.on("chkbradcast",(so)=>{console.log("broadcast", so)})

}
async makesaleable(data){
     const socket = socketIOClient(this.state.endpoint);
    
    const val=  await LandAbi.methods.makeSaleable(data.item).call();
    console.log("val", val);
    
    socket.emit("sale", data);
    
}

async chkcity(){
    var Acc= await web3.eth.getAccounts();
   const resultcity= await LandAbi.methods.checkcompanyportal().call({from: Acc[0]});
console.log("resultcity",resultcity);
}

render(){
    
        
    this.state.count=1;
    return(

        <div  className="text leappadding">
       <span > Your MetaMask Id: </span>   <span style={{color: "orange"}}>{this.state.Account}</span>
            <br></br>
            <br></br>
            <br></br>

<button onClick={this.chkcity}>click</button>

            <ul>

                <h2 className="text5">Your Land Codes < GiIsland  /></h2>
          {
             
          
          this.state.Asset.map(item => (
              
          <li className="text" style={{color: "#0EAD69 "}}  key={item}>{this.state.count++}) {item}  
           &nbsp; <button className="makebtn" onClick={()=>this.makesaleable({item})}>Make Saleable</button>  <hr></hr></li>
          ))
          
          }
        </ul>

           

            
            
            

        </div>
    );
    }

}
export default Landview;