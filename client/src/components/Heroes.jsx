import React, { Component } from "react";
import "./Heros.css";
import Hero from "./Hero";
import Search from "./Search";
import { AZ, ZA, lowestFirst, highestFirst } from "./Sort";
import Layout from "./shared/Layout";
import { getHeroes } from "../services/hero";

class Heroes extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      specialtys: [],
      filterValue: "",
      filteredProducts: null,
      selectValue: "Featured",
    };
  }

  async componentDidMount() {
    const heros = await getHeroes();
    this.setState({
      heroes: heros.hero,
      specialtys: heros.names,
    });
  }

  handleSearchChange = (event) => {
    const filter = () => {
      const filteredProducts = this.state.heroes.filter((hero) => {
        return hero.name
          .toLowerCase()
          .includes(this.state.filterValue.toLowerCase());
      });
      this.setState({ filteredProducts }); // come back
    };
    this.setState({ filterValue: event.target.value }, filter);
  };

  handleSortChange = (event) => {
    this.setState({ selectValue: event.target.value });
    let input = event.target.value; // a-z
    const { heroes } = this.state;
    switch (input) {
      case "name-ascending":
        this.setState({
          products: AZ(heroes),
        });
        break;
      case "name-descending":
        this.setState({
          products: ZA(heroes),
        });
        break;
      default:
        break;
    }
  };

  handleSubmit = (event) => event.preventDefault();

  render() {
    const heroes = this.state.filteredProducts
      ? this.state.filteredProducts
      : this.state.heroes;


    const HEROES = heroes.map((hero, index) => (
      <Hero
        _id={hero._id}
        name={hero.name}
        img={hero.img}
        race={hero.race}
        spec={hero.spec}
        weapon={hero.weapon}
        description={hero.description}
        key={index}
      />
    ));

    return (
      <Layout user={this.props.user}>
        <Search
          onSubmit={this.handleSubmit}
          value={this.state.filterValue}
          onChange={this.handleSearchChange}
          className="hero-search"
        />
        <form className="sort-container" onSubmit={this.handleSubmit}>
          <label htmlFor="sort">SORT BY:</label>
          <select
            className="sort"
            value={this.state.selectValue}
            onChange={this.handleSortChange}
          >
            <option className="option" value="name-ascending">
              &nbsp; Alphabetically, A-Z &nbsp;
            </option>
            <option value="name-descending">
              &nbsp; Alphabetically, Z-A &nbsp;
            </option>
          </select>
        </form>
        <div className="products">{HEROES}</div>
      </Layout>
    );
  }
}

export default Heroes;
