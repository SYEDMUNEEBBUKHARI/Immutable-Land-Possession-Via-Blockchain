import React , { useState } from  "react"
import  "../navbar/sidebar.css"
import {Image, Col,Row} from "react-bootstrap";
import {GoHome, GoTag} from 'react-icons/go';
import {FiPocket} from "react-icons/fi";
import {GiTeacher} from 'react-icons/gi';
import {TiSocialGithubCircular,TiSocialYoutubeCircular,
  TiSocialFacebookCircular, TiSocialLinkedinCircular} from 'react-icons/ti'
import Logo from '../../assets/Siacoin_logo_green.svg'
// import web3 from "../../web3";
// import LandAbi from "../../LandAbi";
import {Router as Router, Redirect} from 'react-router-dom';
import Companyp from "../../companyportal/company";
import {browserHistory} from "react-router";
import {Switch, Route} from "react-router-dom";
import LandAbi from "../../LandAbi";
import web3 from "../../web3";

const mysidebar=props=>{
  const [flag, setflag] = useState(false);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

let drawerclasses="setsidebar";
if(props.show){
    drawerclasses="setsidebaropen";
}
//  async function companyportal(){
//    console.log("flag",flag);
//   console.log("clicked");
  
//    const result = await LandAbi.methods.pak5().call();
//   console.log("result", result);
//   console.log("sflag",setflag);

//   if(result)
//   {
//     setflag(true);
    
//   }
// }
async function chkcity(){
  var Acc= await web3.eth.getAccounts();
 const resultcity= await LandAbi.methods.checkcompanyportal().call({from: Acc[0]});
console.log("resultcity",resultcity);
if(resultcity==1)
{
  browserHistory.push("/companyportal");
  <Route path="/companyportal" component={Companyp} />
  return  <Redirect  to="/companyportal" />
}
}


return(
    <React.Fragment>    
       
  
    <ul bsprefix="litext" className="navAlign">
    <div className={drawerclasses} >
    <br></br>
    <br></br>
         <Image src={Logo}  width= '75px' height='auto'/>
        <h2 className="text-center logocolorbrand " >SyLand</h2>
    
    <hr />
    <br></br>
    <br></br>
    <br></br>



<li> 
&nbsp;
&nbsp;

  <a href=""> <GoHome className="iconcolor" /> Home          </a>
  
</li>
   

<li>
&nbsp;
&nbsp;
 <a href="#turn"> <GiTeacher  className="iconcolor" /> Services          </a></li>

 <li>
&nbsp;
&nbsp;
 <button  className="btn btn" onClick={()=>{chkcity()}} > <FiPocket  className="iconcolor" /> Company Portal       </button></li>
<br />
<br />
<br />

<Row>
  
<Col   >
<h4><TiSocialYoutubeCircular className="iconcolor1"/></h4>
</Col>

<Col  >
<h4><TiSocialGithubCircular className="iconcolor1"/></h4>
</Col>

<Col  >
<h4><TiSocialLinkedinCircular className="iconcolor1"/></h4>
</Col>
<Col  >
<h4><TiSocialFacebookCircular className="iconcolor1"/></h4>
</Col>




</Row>
<p className="text-center colorblack"> 

© 2015-2020 SyLand  (Lands Ledger)
All rights reserved Privacy Policy                     

</p>

</div>

    </ul>
    
    
    

    
    </React.Fragment>

);
};





export default mysidebar;