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
          <h1 className="meet">Meet Our Heros:</h1>
          <div className="aboutHero">
            <h5>{hero.display.name} is a</h5>
            <h5>{hero.display.race}</h5>
            <h5>{hero.display.description}</h5>
          </div>
        </div>
      </Layout>
      : <> </>
    );
  }
}

export default Home;
