import React from "react";
import "./Home.css";
import Layout from "./shared/Layout";
import { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    // this.state = {
    //   hero:
    // }
  }
  render() {
    return (
      <Layout user={this.props.user}>
        <div className="home">
          <h1 className="meet">Meet Our Heros:</h1>
        </div>
      </Layout>
    );
  }
}

export default Home;
