import React,{Component} from 'react';
import  "./Drawer.css"

import {AiOutlineFileSearch} from "react-icons/ai"
import {FiSettings} from "react-icons/fi"
import {GiIsland} from "react-icons/gi";
import {AiOutlineDashboard} from "react-icons/ai"
import {FaPagelines} from "react-icons/fa"


class Drawer extends Component{


     ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    );



render(){

    return(
        




       
<div className={this.props.click}>

<br></br>
<br></br>





<a className="adjust" href=""><AiOutlineDashboard  className="adjustColors" /> <span className="dishide">  Dashboard </span> </a> <br></br>
<hr />

<a className="adjust "  href=""><FaPagelines  className="adjustColors"  />  <span className="dishide"> Registration </span>  </a>  <br></br>
<hr />

<a className="adjust " href="" ><AiOutlineFileSearch className="adjustColors"  /> <span className="dishide">Search</span>  </a>   <br></br>
<hr />

<a className="adjust "  href="#viewLand"><GiIsland className="adjustColors"  /> <span className="dishide">view Land  </span>     </a> <br></br>
<hr />

<a className="adjust "  href=""><FiSettings className="adjustColors"  />  <span className="dishide">Settings </span>  </a>  <br></br>








</div>







    );
}
}





export default Drawer;