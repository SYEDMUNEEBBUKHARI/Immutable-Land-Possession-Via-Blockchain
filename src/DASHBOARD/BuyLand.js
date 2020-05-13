import React from 'react';
import LandAbi from "../LandAbi";
import web3 from "../web3";
import "./BuyLand.css"
import {GiIsland} from "react-icons/gi";

class BuyLand extends React.Component{
    state={
        Account: "",
      
        itemlist: ""
    }
    async componentDidMount(){

        await window.ethereum.enable();
       var Acc= await web3.eth.getAccounts();
       console.log("ACC", Acc);
    this.setState({Account: Acc});


}
async makesaleable(data){
     await LandAbi.methods.makeSaleable(data.item).call();
    console.log("dtatata",data);
}
render(){
    this.state.count=1;
    return(

        <div  className="text leappadding">
       <span > Your MetaMask Id: </span>   <span style={{color: "orange"}}>{this.state.Account}</span>
            <br></br>
            <br></br>
            <br></br>
            <ul>

                <h2 className="text5">Buy Lands< GiIsland  /></h2>
          


        </ul>

           

            

        </div>
    );
    }

}
export default BuyLand;