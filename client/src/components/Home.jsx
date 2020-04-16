import React from "react";
import "./Home.css";
import Layout from "./shared/Layout";
import { Component } from "react";
import { displayAHero } from "../services/hero"

class Home extends Component {
  constructor() {
    super();
    this.state = {
      hero: null,
    }
  }

  componentDidMount = async () => {
    const display = await displayAHero();
    this.setState({
      hero: display
    })
    console.log(this.state.hero)
  }

  render() {
    const { hero } = this.state
    // console.log(hero);
    return (
      this.state.hero ?
      <Layout user={this.props.user}>
        <div className="home">
          <h1 className="meet">MEET THE HERO:</h1>
          <div className="aboutHero">
            <p style={{color: "#9CABA6"}}>{hero.display.name.toUpperCase()}<span style={{color: "white"}}> a</span></p>
            <p style={{color: "#9CABA6"}}>{hero.display.race}<span style={{color: "white"}}> that carry a</span></p>
            <p style={{color: "#9CABA6"}}>{hero.display.weapon}<span style={{color: "white"}}> who is</span></p>
            <p className="descripition">{hero.display.description}</p>
          </div>
        </div>
      </Layout>
      : <> </>
    );
  }
}

export default Home;
