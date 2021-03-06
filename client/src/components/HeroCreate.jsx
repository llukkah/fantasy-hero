import React, { Component } from 'react'
import './HeroCreate.css'
import Layout from './shared/Layout'
import { Redirect } from 'react-router-dom'
import { getSpecialty, createHero } from '../services/hero'

class HeroCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hero: {
        user_id: this.props.user.id || this.props.user._id,
        name: '',
        specialty: null, 
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
          <h1 className="create-form-title">Create your own hero</h1>
          <input
            className="create-input-name create-input-focus"
            placeholder='Name'
            value={hero.name}
            name='name'
            required
            autoFocus
            onChange={this.handleChange}
          />
          <select name="specialty" onChange={this.handleChange} className="create-input-specialty create-input-focus">
            <option>Select Class</option>
            <option value={this.state.list[0]}>Mage</option>
            <option value={this.state.list[1]}>Hunter</option>
            <option value={this.state.list[2]}>Warrior</option>
            <option value={this.state.list[3]}>Healer</option>
            <option value={this.state.list[4]}>Rogue</option>
          </select>

          <select
            name="race"
            onChange={this.handleChange}
            className="create-race-select create-input-focus">
            <option>Select Race</option>
            <option value='human'>Human</option>
            <option value='orc'>Orc</option>
            <option value='elf'>Elf</option>
            <option value='dwarf'>Dwarf</option>
            <option value='goblin'>Goblin</option>
            <option value='troll'>Troll</option>
          </select>


          <input
            className="create-textarea-description create-input-focus"
            rows={10}
            maxLength="50"
            placeholder='Description: Max 50 Characters'
            value={hero.description}
            name='description'
            required
            onChange={this.handleChange}
          />
          <input
            className="create-weapon-input create-input-focus"
            placeholder='Weapon: Max 10 Characters'
            maxLength="10"
            value={hero.weapon}
            name='weapon'
            required
            onChange={this.handleChange}
          />
          <input
            className="input-image-link create-input-focus"
            placeholder='Image Link'
            value={hero.img}
            name='img'
            required
            onChange={this.handleChange}
          />
          <button type='submit' className="create-submit-button">Submit</button>
        </form>
      </Layout>
    )
  }
}

export default HeroCreate