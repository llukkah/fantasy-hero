import React, { Component } from 'react'
import './ProductDetail.css'
import Layout from './shared/Layout'
import { getHero, deleteHero } from '../services/hero'
import { Link } from 'react-router-dom'

class HeroDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
          Hero: {
            name: '',
            specialty: {}, //Come back to this
            race: '',
            hp: 100,
            atk: 50,
            weapon: '',
            img: '',
        }
      }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const hero = await getHero(id)
        this.setState({ hero })
    }

    render() {
        const { hero } = this.state
        return (
            <Layout user={this.props.user}>
                <div className="product-detail">
                    <img className="product-detail-image" src={hero.img} alt={hero.name} />
                    <div className="detail">
                        <div className="name">{hero.name}</div>
                        <div className="price">{`$${hero.specialty}`}</div>
                        <div className="description">{hero.race}</div>
                        <div className="price">{`$${hero.weapon}`}</div>
                        <div className="button-container">
                        <button className="edit-button"><Link className="edit-link" to={`/products/${hero._id}/edit`}>Edit</Link></button>
                            <button className="delete-button" onClick={() => deleteHero(hero._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default HeroDetail
