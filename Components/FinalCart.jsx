import React from 'react'
import {getProductsData} from '../Data/api'

export default function FinalCart({cart}) {
    const [finalCartItems, setFinalCartItems] = React.useState([])
    const [allProducts, setAllProducts] = React.useState([])
    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [totalPrice, setTotalPrice] = React.useState(null)
    React.useEffect(function() {
        async function fetchData() {
            setError(null)
            setLoading(true)
            try {
            const json = await getProductsData()
            setAllProducts(json)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
        
        }, [])

    React.useEffect(function() {
        setFinalCartItems([])
        setTotalPrice(0)
        const cartCart = cart ? Object.keys(cart).map(key => {
            allProducts.map(item => {
                if(cart[key] > 0) {
                    if(item.id == key) {
                        setFinalCartItems(oldValue => {
                            return [...oldValue, {...item, quantity: cart[key]}]
                        })
                        setTotalPrice(oldValue => {
                            return oldValue + item.price * cart[key]
                        })
                    }
                }
            })
        }) : null
    }, [cart])

  

    return <div>
                <div className="cart-price-container">
                    <p style={{color:"white"}}>Products price</p>
                    <p style={{color:"white"}}>{totalPrice ? totalPrice.toFixed(2) : null}$</p>
                </div>
                <div className="cart-price-container">
                    <p style={{color:"white"}}>Delivery</p>
                    <p style={{color:"white"}}>From 0.00$</p>
                </div>
                <p className="cart-total">Total {totalPrice ? totalPrice.toFixed(2) : null}$</p>
            </div>
}