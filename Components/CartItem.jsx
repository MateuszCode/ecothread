import React from 'react'
import {getProductData, getCart} from '../Data/api'
import { Link } from "react-router-dom"
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../src/index"
import {DataContext} from "../src/App"

export default function CartItem({productId, quantity}) {
    const [loading, setLoading] = React.useState(true)
    const [product, setProduct] = React.useState({})
    const {authenticated, cart, setCart} = React.useContext(DataContext)
    const [updatedCart, setCartUpdated] = React.useState(false)

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

    React.useEffect(() => {
        async function fetchCart() {
            const data = await getCart()
            setCart(data)   
            setCartUpdated(false)
    
        }
        authenticated ? fetchCart() : null
    }, [updatedCart])  
    
    
    async function handleClick() {
        const docRef = doc(db, "users", authenticated);
        if (authenticated) {
            if(cart[productId]) {
                setCart(oldCart => {
                    return {
                        ...oldCart,
                        [productId]: cart[productId]--
                    }
                })
                await updateDoc(docRef, {
                    cart: cart
                })
    
            } else {
                await updateDoc(docRef, {
                    cart: {...cart,
                        [productId]: 1
                    }
                })
            }
            setCartUpdated(true)
        }
        else {
            alert("Please log in to add items to the cart.")
        }
    }


    return (product ?
        <div className="cart-item">
            <img src={product.image} className="cart-img"/>
            <div className="cart-product-info">
                <Link to={`/shop/${productId}`}><h3 className="cart-product-heading">{product.title}</h3></Link>
                <p className="cart-product-text"><span style={{fontWeight:"bold", color:"rgb(53, 69, 43)"}}>Price:</span> {product.price}$ </p>
                <p className="cart-product-text" ><span style={{fontWeight:"bold", color:"rgb(53, 69, 43)"}}>Quantity:</span> {quantity}</p>
                {product.price * quantity === product.price ? null :
                <p className="cart-product-text"><span style={{fontWeight:"bold", color:"rgb(53, 69, 43)"}}>Total:</span> {product.price * quantity}$</p>
                }

            </div>
            <button onClick={handleClick}>Remove item</button>
        </div>
        : null)
}