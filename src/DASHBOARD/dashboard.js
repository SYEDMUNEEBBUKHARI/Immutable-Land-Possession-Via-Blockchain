import React, { Component } from 'react';
import LandAbi from "../LandAbi";
import web3 from "../web3";
import 'bootstrap/dist/css/bootstrap.min.css'
import ViewLand from "./vieLand";

import { Col, Row, Button, Dropdown, Container, Navbar, Card } from 'react-bootstrap';
import { TiThMenu } from "react-icons/ti";

import { Switch, Route, Router as Router } from "react-router-dom"
import history from '../Services/history';

import socketIOClient from "socket.io-client";
import "./dashboard.css";
import RegistrationOnBlockchain from "./RegisterLand";

import App from '../App';

import Drawer from "./Drawer";

import Isi from "../assets/giphy.gif"
import Bl from "../assets/Bl.gif"
import BuyLand from "./BuyLand";
class dashboard extends Component {

    constructor() {
        super();
        this.state = {

            logout: false,
            store: "hiiii",
            Emaild: "",
            Named: "",
            ipfsHashd: "",
            loggin: false,
            showdrawer: false,
            showflex: 'setflex',
            response: 0,
            endpoint: "http://127.0.0.1:5000",
            Count: ""

        }
    }



    async componentDidMount() {

        const Email = localStorage.getItem("Email");
        const Name = localStorage.getItem("Name");
        const ipfsHash = localStorage.getItem("ipfsHash");
        const Count = localStorage.getItem("Count");
        this.setState({
            Emaild: Email,
            Named: Name,
            ipfsHashd: ipfsHash,
            Count: Count



        });

         var result = await LandAbi.methods.landInfoOwner("0x7deddbeee2923bb35d0990c8f66cc70c7ebcfb6d756c63bc7b3abe44159adbf7").call();
        console.log("result", result);
        const account= await web3.eth.getAccounts;
        console.log("Accounts", account);

        const socket = socketIOClient(this.state.endpoint);
        //Listen for data on the "outgoing data" namespace and supply a callback for what to do when we get one. In this case, we set a state variable
        socket.on("outgoing data", data => console.log("ist",data));
        

    }


    drawerclickhand = (prevstate) => {
        const socket = socketIOClient(this.state.endpoint);
        socket.emit("incoming data", "coolcup");

        this.setState((prevstate) => {
            if (prevstate.showdrawer) {
                return { showdrawer: false }
            } else {
                return { showdrawer: true }

            }
        });

    }


    runLogout = () => {


        console.log("logging out ");

        localStorage.removeItem('token');
        localStorage.removeItem('Name');
        localStorage.removeItem('Email');
        localStorage.removeItem('ipfsHash');


        this.setState({ loggin: true })


    }




    render() {
        let sidebar;
        let showflex = 'setflex';
        if (this.state.showdrawer) {
            sidebar = < Drawer click = { 'setAlign' }
            />;
            showflex = 'setflexx';

        } else {

            sidebar = < Drawer click = { 'setAlig' }
            />;

        }
        console.log("property", this.props.location);

        console.log("Emailil", localStorage.getItem("Name"));


        console.log("Email aya", this.state.Email);

        console.log(this.props);
        if (this.state.loggin) {
            return <Route path = "/"
            component = { App }
            />

        }

        return ( <
            Router history = { history } >


            <
            React.Fragment >

            < Switch >

            < Route exact path = "/"
            component = { App }
            />



            </Switch> 
            <Container >

            < Navbar fixed = "top" collapseOnSelect expand = "xxl" >

            < Button bsPrefix = "chkbtn" position = "fixed" onClick = { this.drawerclickhand } > < TiThMenu className = "iconsy" / > </Button>


            < Dropdown >
            < Dropdown.Toggle className = "dropbtn" id = "dropdown-basic" >
            Welcome { this.state.Named } </Dropdown.Toggle>

            < Dropdown.Menu >
            < Dropdown.Item href = "#/action-1" > Action </Dropdown.Item> < Dropdown.Item href = "#/action-2" > Another action </Dropdown.Item> 
            < Dropdown.Item onClick = { this.runLogout } > Logout </Dropdown.Item> </Dropdown.Menu> </Dropdown>


            { /* <Image src={Logo}  width= '55px' height='35px'/> */ } {
                /*            
                            <Navbar.Collapse id="responsive-navbar-nav">
                              
                            
                           <DropdownButton bsPrefix="btnsetting Hi
                "  title={ this.state.Named }>
                  <Dropdown.Item as="button"><GoDashboard  className="signup"  />DASHBOARD</Dropdown.Item>
                  <Dropdown.Item as="button"><GiIsland className="signup"  />Register Land</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={this.runLogout}><MdPerson className="signup"  />  Logout</Dropdown.Item>
                </DropdownButton>
                              

                             
                            
                            
                           
                            </Navbar.Collapse> */
            }




            </Navbar>   </Container>


    
            { sidebar }

            <
            div className = { showflex } >
            <
            Container className = "makeDiv" >



            <
            Row >
            <
            Col md = { 4 } >

            <
            Card style = {
                { width: '15rem' } } >
            <
            Card.Img variant = "top"
            src = { Isi }
            style = {
                { height: '10rem' } }
            /> <
            Card.Body >

            <
            Card.Text >
            Connected Users { this.state.Count } </Card.Text>

            </Card.Body> </Card >  </Col>

            <
            Col md = { 4 } > < Card style = {
                { width: '15rem' } } >

            <
            iframe width = "240"
            height = "160"
            src = "http://www.youtube.com/embed/_BIsffqaW1M"
            allowFullScreen = "true"
            webkitallowfullscreen = "true"
            mozallowfullscreen = "true" >
            </iframe>

            {
                /*  <Iframe url="http://www.youtube.com/embed/_BIsffqaW1M"
                        width="285"
                        height="160"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                        frameborder="0" 
                        allowfullscreen
                        />*/
            } <Card.Body >

            <Card.Text >
            What is BlockChain ?
            </Card.Text>

            </Card.Body> 
            </Card>
            </Col >

            <
            Col md = { 4 } > < Card style = {
                { width: '15rem' } } >
            <
            Card.Img variant = "top"
            src = { Bl }
            style = {
                { height: '10rem' } }
            /> < Card.Body >

            <Card.Text >
            How it Works!
            </Card.Text>

            </Card.Body> </Card></Col >

            </Row>


            555

           
            
            <ViewLand />
            <BuyLand />

            <RegistrationOnBlockchain />
            </Container>

            
            </div>






     




            </React.Fragment> </Router>

        );
    }


}

export default dashboard;