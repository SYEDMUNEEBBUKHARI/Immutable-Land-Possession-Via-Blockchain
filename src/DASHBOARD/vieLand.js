import React from 'react';
import LandAbi from "../LandAbi";
import web3 from "../web3";
import "./land.css"
import {GiIsland} from "react-icons/gi";

class Landview extends React.Component{
    state={
        Account: "",
        Asset: [],
        count: 0
    }
    async componentDidMount(){

        await window.ethereum.enable();
       var Acc= await web3.eth.getAccounts();
       console.log("ACC", Acc);
    this.setState({Account: Acc});
const Asse= await LandAbi.methods.viewAssets().call({from: Acc[0]});
this.setState({Asset: Asse});
console.log("Assets",this.Asset);

}
render(){
    return(

        <div  className="text leappadding">
       <span > Your MetaMask Id: </span>   <span style={{color: "orange"}}>{this.state.Account}</span>
            <br></br>
            <br></br>
            <br></br>
            <ul>

                <h2 className="text5">Your Land Codes < GiIsland  /></h2>
          {
             
          
          this.state.Asset.map(item => (
              
            <li className="text" style={{color: "#0EAD69 "}}  key={item}>{this.state.count++}) {item} &nbsp; <button className="makebtn">Make Saleable</button>  <hr></hr></li>
          ))
          
          }
        </ul>

           

            

        </div>
    );
    }

}
export default Landview;