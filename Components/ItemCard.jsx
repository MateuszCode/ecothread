import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom"
import HeartComponent from "./HeartComponent"
import AddToCartButton from "./AddToCartButton"
import { IoIosAddCircle } from "react-icons/io";

export default function ItemCard({ title, price, image, rating, ratingCount, className, id}) {

    return (
            <div className={`product-card ${className}`}>
                <HeartComponent productId={id} className="item-card-favorite"/>
                    <AddToCartButton productId={id} className="item-card-add-btn">
                        <IoIosAddCircle/>
                    </AddToCartButton>
                <div className="product-card-link-container">
                <Link to={`/shop/${id}`}
                 state={{itemId: id}}>
                <div className="img-container">
               
                    <img src={image} className="product-card-img"/>
                </div>
                <div className="product-card-info">
                    <p className="rating">{rating} <FaStar className="star-icon"/> ({ratingCount})</p>
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

