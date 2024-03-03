import React from 'react'
import {DataContext} from "../App"
import {Link} from "react-router-dom"
import { SiMastercard } from "react-icons/si";
import { SiAmericanexpress } from "react-icons/si";
import { SiApplepay } from "react-icons/si";
import { SiVisa } from "react-icons/si";
import { SiPaypal } from "react-icons/si";
import { SiReact, SiReactHex } from '@icons-pack/react-simple-icons';
import {getCart} from "../../Data/api"
import CartItem from "../../Components/CartItem"


export default function Cart() {
    const {authenticated, cart, setCart, updatedCart, setCartUpdated, totalCost} = React.useContext(DataContext)
    const [emptyCart, setEmptyCart] = React.useState(true)
    const [totalPrice, setTotalPrice] = React.useState(0)
    React.useEffect(() => {
        async function fetchCart() {
            const data = await getCart()
            setCart(data)              

        }
        authenticated ? fetchCart() : null
    }, [])  

    const cartItems = cart ? Object.keys(cart).map(key => {
        if(cart[key] > 0){
            return <CartItem productId={key} quantity={cart[key]} key={key}/>
        }
    }) : null 

   
    
    React.useEffect(() => {
        setEmptyCart(true)
        for(let item of Object.values(cart)) {
            if (item > 0) {
                setEmptyCart(false)
            }
    }
    }, [cart])

    return (

    <div>
        <div className="cart-container">
            
            { emptyCart ?  
                <div className="cart-left-container">
                <h1 className="cart-heading">Your cart is empty</h1> 
                <div>
                    <h3 className="cart-subheading">There is nothing in your cart yet</h3>
                    <p><Link to="/login" className="cart-login-link">Log in</Link> to access already saved items in your shopping bag.</p>
                </div>
                </div> :
                <div className="cart-left-container">
                <div className="cart-items">
                    {cartItems}
                </div> 
                </div>
                
            }
            <div className="cart-right-container">
                <p className="cart-total">Total {totalPrice.toFixed(2)}$</p>
                <button className="checkout-btn">Continue to checkout</button>
                <p className="accepted-cards">We accept</p>
                <p>
                <SiVisa className="cart-icon cart-icon-first" color={SiReactHex}/> &nbsp;
                <SiMastercard className="cart-icon"/> &nbsp;
                <SiAmericanexpress className="cart-icon"/> &nbsp;
                <SiPaypal className="cart-icon"/> &nbsp;
                <SiApplepay className="cart-icon"/>
                </p>
                <p className="cart-fine-print">Prices and delivery costs are not confirmed 
                    until you've reached the checkout. 28 days right of withdrawal.&nbsp;<Link to="/about"
                    style={{color:"white"}}>Read more about return and refund policy.</Link>
                </p>

            </div>

        </div>

    </div>
    )
}