import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom'

const Hero = (props) => {
    return (
        <>
            <Link className="product" to={`/heroes/${props._id}`}>
                <img className="product-image" src={props.imgURL} alt={props.name} />
                <div className="product-name">{props.name}</div>
                <div className="price">{`${props.race}`}</div>
                <div className="price">{`${props.weapon}`}</div>
            </Link>
        </>
    )
}

export default Hero