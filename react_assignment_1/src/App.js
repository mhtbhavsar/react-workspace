import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userdata : [
      {first_name : "Mohit", last_name : "Bhavsar"},
      {first_name : "nitesh", last_name : "Bhavsar"}
    ],
    first_name : "Mohit",
    last_name : "Bhavsar"
  };

  changeNameHandler = (event) => {
    this.setState({  [event.target.name]: event.target.value });
  }

  resetNameHandler = (event) => {
    this.setState({
      userdata : [
        {first_name : "Mohit", last_name : "Bhavsar"},
        {first_name : "Mohit", last_name : "Bhavsar"}
      ],
      first_name : "Mohit",
      last_name : "Bhavsar"
    })
  }

  render(){
    return(
    <div className="App">
      <h1>1st React Assignment - User input and output</h1>
      <UserInput changed={this.changeNameHandler}/>
      <UserOutput resetHandler={this.resetNameHandler} name={this.state.first_name+" "+this.state.last_name}/>
    </div>
    )
  }
}

export default App;
