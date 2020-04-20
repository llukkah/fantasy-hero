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
            user_id: '',
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
        this.setState({ hero: this.props.location.state })
    }

  render() {
    const { hero } = this.state
    console.log(`this is hero user${Object.keys(this.props.user)}`)
    return (
      hero ?
        <Layout user={this.props.user}>
          <div className="hero-detail">
            <div><img className="hero-img" src= {hero.img} alt={hero.name} /></div>
            <div className="detail">
              <div className="detail-name">{hero.name}</div>
              <div className="detail-description">{hero.description}</div>
              <div className="detail-specialty"><span className="detail-span">Specialty:</span> {hero.spec}</div>
              <div className="detail-race"><span className="detail-span">Race:</span> {hero.race}</div>
              <div className="detail-weapon"><span className="detail-span">Weapon:</span> {hero.weapon}</div>
              {this.props.user&& this.props.user.id || this.props.user._id === hero.user_id ? 
              <div className="button-container">
                <Link className="edit-link" to={`/heroes/${hero._id}/edit`}>Edit</Link>
                <Link className="delete-link" onClick={() => deleteHero(hero._id)} to="/heroes">Delete</Link>
              </div>
              : <> </>
              }
            </div>
          </div>
        </Layout>
        : <> </>
    )
  }
}
export default HeroDetail