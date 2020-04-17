import React, { Component } from 'react'
import './HeroEdit.css'
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
        description: ''
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
            <img className="edit-product-image" src={hero.img} alt={hero.name} />
          </div>
          <form className="edit-form" onSubmit={this.handleSubmit}>
            <input
              className="input-name"
              placeholder='Name'
              id="name"
              value={hero.name}
              name='name'
              required
              autoFocus
              onChange={this.handleChange}
            />
            <label className="label">Description: Max 50 Characters</label>
            <textarea
              className="textarea-description"
              placeholder='Enter a description'
              rows="10"
              maxLength="50"
              id="description"
              value={hero.description}
              name='description'
              required
              onChange={this.handleChange}
            />
            <select
              name="race"
              onChange={this.handleChange}
              className="race-select">
              <option>Select Race</option>
              <option value='human'>Human</option>
              <option value='orc'>Orc</option>
              <option value='elf'>Elf</option>
              <option value='dwarf'>Dwarf</option>
              <option value='goblin'>Goblin</option>
              <option value='troll'>Troll</option>
            </select>
            <label className="label" >Weapon:</label>
            <input
              className="input-price"
              placeholder='Weapon'
              id="weapon"
              value={hero.weapon} // come back to this
              name='weapon'
              required
              onChange={this.handleChange}
            />
            <label className="label">Image Link:</label>
            <input
              className="edit-input-image-link"
              placeholder='Image Link'
              id="img"
              value={hero.img}
              name='img'
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