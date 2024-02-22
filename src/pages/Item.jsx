import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom"

export default function Item({ title, description, price, image, rating, ratingCount, className, id}) {

    return (
        <Link to={`${id}`}>
            <div className={`product-card ${className}`}>
                <div className="img-container">
                    <img src={image} className="product-card-img"/>
                </div>
                <div className="product-card-info">
                    <p className="rating">{rating} <FaStar className="star-icon" /> ({ratingCount})</p>
                    <p>
                    {title.length > 30 ?
                    `${title.substring(0, 30)}...` : title
                    }
                    </p>
                    <p className="product-card-price">{price} $</p>
                </div>
            </div>
        </Link>
    )
}


// title={product.title}
// description={product.description}
// price={product.price}
// image={product.image}
// rating={product.rating.rate}
// ratingCount={product.rating.ratingCount}