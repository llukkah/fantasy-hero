import React, { Component } from "react";
import "./Products.css";
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

    const [...heroCopy] = [...this.state.heroes];
    const { heroes, specialtys } = this.state;
    for (let i = 0; i < this.state.heroes.length; i++) {
      // create a copy this.state.heroes const herov2 =
      heroCopy[i].spec = this.state.specialtys[i];

    }
  }
  mergeSpec = () => {
    heroes.forEach((e, i) => heroCopy[i].spec = this.state.specialtys[i])
    console.log(heroCopy)
    this.setState({
      heroes: heroCopy
      // heros: (this.state.heroes[i].spec = this.state.specialtys[i]),
    });
  }
  // const specMap = specialtys.map(special => this.state.heros.push(special))


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
      case "price-ascending":
        this.setState({
          products: lowestFirst(heroes),
        });
        break;
      case "price-descending":
        this.setState({
          products: highestFirst(heroes),
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

    // ========================================
    if (this.state.heroes.length > 1) {
      console.log(this.state.heroes);
    }

    const HEROES = heroes.map((hero, index) => (
      <Hero
        _id={hero._id}
        name={hero.name}
        imgURL={hero.img}
        race={hero.race}
        spec={hero.spec}
        weapon={hero.weapon}
        key={index}
      />
    ));

    return (
      <Layout user={this.props.user}>
        <Search
          onSubmit={this.handleSubmit}
          value={this.state.filterValue}
          onChange={this.handleSearchChange}
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
            <option value="price-ascending">
              &nbsp; Price, low to high &nbsp;
            </option>
            <option value="price-descending">
              &nbsp; Price, high to low &nbsp;
            </option>
          </select>
        </form>
        <div className="products">{HEROES}</div>
      </Layout>
    );
  }
}

export default Heroes;
