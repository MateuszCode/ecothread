import React from 'react'
import {getProductData} from '../Data/api'
import { Link } from "react-router-dom"
import RemoveButton from "./RemoveFromCartButton"
import {DataContext} from "../src/App"
import QuantitySelector from "./QuantitySelector"

export default function CartItem({productId, quantity}) {
    const [loading, setLoading] = React.useState(true)
    const [product, setProduct] = React.useState({})
    const {totalCost, setTotalCost} = React.useContext(DataContext)

    React.useEffect(function() {
        async function fetchData() {
            setLoading(true)
            try {
            const json = await getProductData(productId)
            setProduct(json)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const total = product.price * quantity

    React.useEffect(function() {
            setTotalCost(oldValue => {
                return {...oldValue, [productId]: total}
            })
    
    }, [total])

    return (loading ? null :
        <div className="cart-item">
            <img src={product.image} className="cart-img"/>
            <div className="cart-product-info">
                <Link to={`/shop/${productId}`}>
                    <h3 className="cart-product-heading"> 
                    {product.title.length > 30 ?
                    `${product.title.substring(0, 30)}...` : 
                    product.title}</h3>
                </Link>
                <p className="cart-product-text"><span style={{fontWeight:"bold", color:"rgb(53, 69, 43)"}}>Price:</span> {product.price ? product.price : null}$ </p>
                <p className="cart-product-text" ><span style={{fontWeight:"bold", color:"rgb(53, 69, 43)"}}>Quantity:</span>
                <QuantitySelector quantity={quantity} productId={productId}/>
                </p>
                {product.price * quantity === product.price ? null :
                product.price ? 
                <p className="cart-product-text"><span style={{fontWeight:"bold", color:"rgb(53, 69, 43)"}}>Total:</span> {total.toFixed(2)}$</p>
                : null
                }
            </div>
            <RemoveButton productId={productId}></RemoveButton>

        </div>)
}