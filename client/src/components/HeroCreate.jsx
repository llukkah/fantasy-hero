import React, { Component } from 'react'
import './ProductCreate.css'
import Layout from './shared/Layout'
import { Redirect } from 'react-router-dom'
import { getSpecialty, createHero } from '../services/hero'

class HeroCreate extends Component {
  constructor() {
    super()
    this.state = {
      hero: {
        name: '',
        specialty: null, //Come back to this
        race: '',
        hp: 100,
        atk: 50,
        weapon: '',
        img: '',
      },
      created: false,
      list: '',
    }
  }

  componentDidMount = async () => {
    const specialty = await getSpecialty();
    this.setState({
      list: specialty
    })
    console.log(this.state.list)
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      hero: {
        ...this.state.hero,
        [name]: value
        // come back to this
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createHero(this.state.hero)
    this.setState({ created })
    console.log(this.state.list)
  }

  render() {
    const { hero, created } = this.state

    if (created) {
      return <Redirect to={`/heroes`} />
    }
    return (
      <Layout user={this.props.user}>
        <form className="create-form" onSubmit={this.handleSubmit}>
          <input
            id="create-name"
            className="input-name"
            placeholder='Name'
            value={hero.name}
            name='name'
            required
            autoFocus
            onChange={this.handleChange}
          />
          <select name="specialty" onChange={this.handleChange} className="input-price">
            <option>SELECT A CLASS</option>
            <option value={this.state.list[0]}>Healer</option>
            <option value={this.state.list[1]}>Hunter</option>
            <option value={this.state.list[2]}>Mage</option>
            <option value={this.state.list[3]}>Warrior</option>
            <option value={this.state.list[4]}>Rogue</option>
          </select>



          <select
            name="race"
            onChange={this.handleChange}
            className="race-select">
            <option>Select Race</option>
            <option value='human'>Human</option>
            <option value='orc'>orc</option>
            <option value='elf'>Elf</option>
            <option value='dwarf'>Dwarf</option>
            <option value='goblin'>Goblin</option>
            <option value='troll'>Troll</option>
          </select>


          <input
            className="textarea-description"
            rows={10}
            placeholder='Enter a description'
            value={hero.description}
            name='description'
            required
            onChange={this.handleChange}
          />
          <input
            className="input-image-link"
            placeholder='Weapon'
            value={hero.weapon}
            name='weapon'
            required
            onChange={this.handleChange}
          />
          <input
            className="input-image-link"
            placeholder='Image Link'
            value={hero.img}
            name='img'
            required
            onChange={this.handleChange}
          />
          <button type='submit' className="submit-button">Submit</button>
        </form>
      </Layout>
    )
  }
}

export default HeroCreate