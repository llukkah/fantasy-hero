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
    // console.log(this.state.hero)
  }

  render() {
    const { hero } = this.state
    // console.log(hero);
    return (
      this.state.hero ?
      <Layout user={this.props.user}>
        <div className="bigHome">
        <div className="home">
          <h1 className="meet">MEET THE <span className="headerHero" style={{color: "#9CABA6"}}>HERO:</span></h1>
          <div className="aboutHero">
            <p className="about-hero" style={{color: "#9CABA6"}}>{hero.display.name.toUpperCase()}<span className="inner" style={{color: "white"}}> is a(n)</span></p>
            <p className="about-hero"style={{color: "#9CABA6"}}>{hero.display.race}<span className="inner" style={{color: "white"}}> who is </span></p>
            <p className="desc" style={{color: "#9CABA6"}}>{hero.display.description}<span className="inner" style={{color: "white"}}> that carries a(n)</span></p>
            <p className="about-hero"style={{color: "#9CABA6"}}>{hero.display.weapon}</p>
          </div>
        </div>
        </div>
      </Layout>
      : <> </>
    );
  }
}

export default Home;
