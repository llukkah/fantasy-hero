import React, { Component } from 'react'
import './HeroDetail.css'
import Layout from './shared/Layout'
import { getHero, deleteHero } from '../services/hero'
import { Link } from 'react-router-dom'

class HeroDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
          hero: {
            _id:'',
            name: '',
            race: '',
            weapon: '',
            img: '',
            spec: '',
            description: ''
        }
      }
    }

    async componentDidMount() {
        // let { id } = this.props.match.params
        // const hero = await getHero(id)
        // this.setState({ hero })

        this.setState({ hero: this.props.location.state })
    }

<<<<<<< HEAD
  render() {
    const { hero } = this.state
    return (
      hero ?
        <Layout user={this.props.user}>
          <div className="hero-detail">
            {/* <img className="hero-img" src={hero.img} alt={hero.name} /> */}
            <div className="detail">
              <div className="name">{hero.name}</div>
              <div className="description">{hero.description}</div>
              <div className="specialty"><span>Specialty:</span> {hero.spec}</div>
              <div className="race"><span>Race:</span> {hero.race}</div>
              <div className="weapon"><span>Weapon:</span> {hero.weapon}</div>
              <div className="button-container">
                <Link className="edit-link" to={`/heroes/${hero._id}/edit`}>Edit</Link>
                <Link className="delete-link" onClick={() => deleteHero(hero._id)} to="/heroes">Delete</Link>
              </div>
            </div>
          </div>
        </Layout>
        : <> </>
    )
  }
=======
    render() {
        const { hero } = this.state
        return (
            hero ? 
            <Layout user={this.props.user}>
                <div className="product-detail">
                    {/* <img className="product-detail-image" src={hero.img} alt={hero.name} /> */}
                    <div className="detail">
                        <div className="name">{hero.name}</div>
                        <div className="price">{hero.spec}</div>
                        <div className="description">{hero.race}</div>
                        <div className="description">{hero.description}</div>
                        <div className="price">{hero.weapon}</div>
                        <div className="button-container">
                        <button className="edit-button">
                            <Link className="edit-link" to={`/heroes/${hero._id}/edit`}>Edit</Link>
                        </button>
                            <button className="delete-button">
                                <Link onClick={() => deleteHero(hero._id)} to="/heroes">Delete</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
            : <> </>
        )
    }
>>>>>>> bb0564b717248131afed3b3f12cbc45147aaeeab
}

export default HeroDetail
