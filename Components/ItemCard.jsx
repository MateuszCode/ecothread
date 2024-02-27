import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom"
import HeartComponent from "./HeartComponent"

export default function Item({ title, price, image, rating, ratingCount, className, id}) {

    return (
       
        
            <div className={`product-card ${className}`}>
                <HeartComponent productId={id} className="item-card-favorite"/>
                <div className="product-card-link-container">
                <Link to={`/shop/${id}`}
                 state={{itemId: id}}>
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
                </Link>

                </div>
            </div>

    )
}

