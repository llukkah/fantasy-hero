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
        _id: '',
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
}

export default HeroDetail
