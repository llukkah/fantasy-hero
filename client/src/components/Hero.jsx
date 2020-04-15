import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom'

const Hero = (props) => {
    return (
        <>
        <Link className="product" to={{pathname: `/heroes/${props._id}`,
            state: {
                _id: props._id,
                name: props.name,
                race: props.race,
                weapon: props.weapon,
                img: props.img,
                spec: props.spec
            }
        }}>
                <img className="product-image" src={props.img} alt={props.name} />
                <div className="product-name">{props.name}</div>
                <div className="price">{props.race}</div>
                <div className="weapon">{props.weapon}</div>
                <div className="specialty">{props.spec}</div>
            </Link>
        </>
    )
}

export default Hero