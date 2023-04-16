import React from "react";
import { Component } from "react";

class Hello extends Component{
 render(){
  return(
    <div class="f1 tc">
    <h1>Hello World Using the React Component!!!</h1>
    <p>Welcome to React!!</p>
    <p>{this.props.greeting}</p>
    </div>
  );
 }
}

export default Hello;