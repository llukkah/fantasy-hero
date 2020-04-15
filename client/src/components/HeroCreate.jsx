import React, { Component } from 'react'
import './ProductCreate.css'
import Layout from './shared/Layout'
import { Redirect } from 'react-router-dom'
import { getSpecialty , createHero } from '../services/hero'

class HeroCreate extends Component {
<<<<<<< HEAD
  constructor() {
    super()
    this.state = {
      Hero: {
        name: '',
        specialty: {}, //Come back to this
        race: '',
        hp: 100,
        atk: 50,
        weapon: '',
        img: '',
      },
      created: false
=======
    constructor() {
        super()
        this.state = {
            hero: {
                name: '',
                specialty: {}, //Come back to this
                race: '',
                hp: 100,
                atk: 50,
                weapon: '',
                img: '',
            },
            created: false,
            list: '',
        }
>>>>>>> 9909a80a6bd3786789b50708ae4d8e5f3342a58e
    }
  }

<<<<<<< HEAD
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
=======
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
>>>>>>> 9909a80a6bd3786789b50708ae4d8e5f3342a58e

  handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createHero(this.state.hero)
    this.setState({ created })
  }

  render() {
    const { hero, created } = this.state

<<<<<<< HEAD
    if (created) {
      return <Redirect to={`/heroes`} />
=======
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
                    <input
                        className="input-price"
                        placeholder='Specialty'
                        value={hero.specialty} // change this to a dropdown
                        name='specialty'
                        required
                        onChange={this.handleChange}
                    />
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
>>>>>>> 9909a80a6bd3786789b50708ae4d8e5f3342a58e
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
          <input
            className="input-price"
            placeholder='Price'
            value={hero.specialty} // change this to a dropdown
            name='price'
            required
            onChange={this.handleChange}
          />
          <textarea
            className="textarea-description"
            rows={10}
            placeholder='Description'
            value={hero.race}
            name='description'
            required
            onChange={this.handleChange}
          />
          <input
            className="input-image-link"
            placeholder='Image Link'
            value={hero.weapon}
            name='imgURL'
            required
            onChange={this.handleChange}
          />
          <input
            className="input-image-link"
            placeholder='Image Link'
            value={hero.img}
            name='imgURL'
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