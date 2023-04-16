import logo from "./logo.svg";
import Hello from "./Hello";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import React from "react";
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  OnSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredval = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc ">
        <h1 className="fw3 tcfw6 br6 ba he60 b--green  box-shadow grow">
          ROBO FRIENDS
        </h1>
        <SearchBox onsearcher={this.OnSearchChange} />
        <CardList robots={filteredval} />
      </div>
    );
  }
}

export default App;
