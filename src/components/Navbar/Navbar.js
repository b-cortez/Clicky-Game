import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
         
          <li className=""><a href>Clicky Game</a></li>
          <li className="">Click an image to begin!</li>
          <li className="">Score:&nbsp;{this.props.score}&nbsp; |&nbsp; Top Score: &nbsp;{this.props.topScore}</li>
      </nav>
    );
  }
}

export default Navbar;