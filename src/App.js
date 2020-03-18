import React, { Component } from 'react';
import Nave from '../src/components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Route,Router} from 'react-router'
import './App.css';
import Cont from '../src/components/container/contaner'
import Io from '../src/components/io/io'
import styled from 'styled-components';
import red from './components/Button/Button';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Foott from '../src/components/footer/footer';
// import axios from 'axios'
import Sidebarr from "../../turn1213/src/components/navbar/sidedraw"
import WhyBlock from "../src/components/whyblock/whyblock";
import Load from "../src/components/container/mainload"
import {Circular, Cube,CubeGrid } from "styled-loaders-react";
import ReactCardFlip from 'react-card-flip';
import axios from 'axios';

const Sylee=styled.div`

.reddd{
  background-color: black;
}

`
class App extends Component {
  

  state={
    loading: true,
    isFlipped: true
  }
componentDidMount(){
setTimeout(()=>{
  this.setState({loading: false});
},3000)

  axios.get(`http://localhost:5000/api`);
}


  render() {


    return (
      <Sylee>
         
        {this.state.loading ? <div className="load"><CubeGrid color= '#0EAD69' /></div>  : 
       
      <React.Fragment  className='reddd'>
     
    
      <Nave / >
      
      
     
      <Cont  / >
      <WhyBlock />
       <Io />
       
      <Foott></Foott>
     

      </React.Fragment>
      }
      </Sylee>
    );
  }
}

export default App;
