import React, { Component } from 'react'
import './ProductDetail.css'
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
          <div className="product-detail">
            {/* <img className="product-detail-image" src={hero.img} alt={hero.name} /> */}
            <div className="detail">
              <div className="name">{hero.name}</div>
              <div className="price">{hero.spec}</div>
              <div className="description">{hero.race}</div>
              <div className="description">{hero.description}</div>
              <div className="price">{hero.weapon}</div>
              <div className="button-container">
                <Link className="edit-link" to={`/heroes/${hero._id}/edit`}><button className="edit-button">
                  Edit
                </button></Link>
                <Link onClick={() => deleteHero(hero._id)} to="/heroes">
                  <button className="delete-button">Delete
                </button></Link>
              </div>
            </div>
          </div>
        </Layout>
        : <> </>
    )
  }
}

export default HeroDetail
