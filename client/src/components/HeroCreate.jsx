import React, { Component } from 'react'
import './ProductCreate.css'
import Layout from './shared/Layout'
import { Redirect } from 'react-router-dom'
import { createHero } from '../services/hero'

class HeroCreate extends Component {
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
        }
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