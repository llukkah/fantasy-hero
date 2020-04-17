import React from "react";
import "./Splash.css";
import Layout from "./shared/Layout";
import { Component } from "react";


class Splash extends Component {
  constructor() {
    super();
  }

  render() {
    let redirect = () => {
      window.location.assign("/home");
    }
    return (
      <div className="splash">
        <h1 className="splash-text">HERO[ID]</h1>
        <button className="splash-but" onClick={redirect}>ENTER</button>
      </div>
    );
  }
}

export default Splash;
