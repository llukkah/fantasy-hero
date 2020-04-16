import React, { Component } from 'react'
import './ProductEdit.css'
import { Redirect } from 'react-router-dom'
import Layout from './shared/Layout'
import { getHero, updateHero } from '../services/hero'

class HeroEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hero: {
        _id: '',
        name: '',
        specialty: {}, //Come back to this
        race: '',
        hp: 100,
        atk: 50,
        weapon: '',
        img: '',
      },
      updated: false
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const hero = await getHero(id)
    this.setState({ hero })
    // console.log(this.state.hero)
    // console.log(this.state.hero._id)
  }


  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      hero: {
        ...this.state.hero,
        [name]: value //come back to this
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    let { id } = this.props.match.params
    const updated = await updateHero(id, this.state.hero)
    this.setState({ updated })
  }

  render() {

    const { hero, updated } = this.state
    if (updated) {
      return <Redirect to={`/heroes`} />
    }


    return (
      <Layout user={this.props.user}>
        <div className="product-edit">
          <div className="image-container">
            {/* <img className="edit-product-image" src={hero.img} alt={hero.name} /> */}
            <form onSubmit={this.handleSubmit}>
              <input
                className="edit-input-image-link"
                placeholder='Image Link'
                value={hero.img}
                name='imgURL'
                required
                onChange={this.handleChange}
              />
            </form>
          </div>
          {/* <div className="stackDiv"> */}
          <form className="edit-form" onSubmit={this.handleSubmit}>
            <input
              className="input-name"
              placeholder='Name'
              value={hero.name}
              name='name'
              required
              autoFocus
              onChange={this.handleChange}
            />
            <input
              className="input-price"
              placeholder='Specialty'
              value={hero.specialty} // come back to this
              name='specialty'
              required
              onChange={this.handleChange}
            />

            <input
              className="input-price"
              placeholder='Race'
              value={hero.race} // come back to this
              name='race'
              required
              onChange={this.handleChange}
            />
            <input
              className="input-price"
              placeholder='Weapon'
              value={hero.weapon} // come back to this
              name='weapon'
              required
              onChange={this.handleChange}
            />
            <button type='submit' className="save-button">Save</button>
          </form>
          {/* </div> */}
        </div>
      </Layout>
    )
  }
}

export default HeroEdit