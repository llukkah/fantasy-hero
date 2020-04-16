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
    console.log(this.state.hero)
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
            className="input-name"
            placeholder='Name'
            value={hero.name}
            name='name'
            required
            autoFocus
            onChange={this.handleChange}
          />
          <select name="specialty" onChange={this.handleChange} className="input-price">
            <option value={this.state.list[0]}>Hunter</option>
            <option value={this.state.list[1]}>Mage</option>
            <option value={this.state.list[2]}>Healer</option>
            <option value={this.state.list[3]}>Rogue</option>
          </select>
          <textarea
            className="textarea-description"
            rows={10}
            placeholder='Enter a race'
            value={hero.race}
            name='race'
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
