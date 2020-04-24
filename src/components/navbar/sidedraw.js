import React , { useState } from  "react"
import  "../navbar/sidebar.css"
import {Image, Col,Row} from "react-bootstrap";
import {GoHome, GoTag} from 'react-icons/go';
import {GiTeacher} from 'react-icons/gi';
import {TiSocialGithubCircular,TiSocialYoutubeCircular,
  TiSocialFacebookCircular, TiSocialLinkedinCircular} from 'react-icons/ti'
import Logo from '../../assets/Siacoin_logo_green.svg'
const mysidebar=props=>{

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

let drawerclasses="setsidebar";
if(props.show){
    drawerclasses="setsidebaropen";
}
const myfunc=()=>{
  console.log("clicked");
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