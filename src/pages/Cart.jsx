import React from 'react'
import {DataContext} from "../App"
import {Link} from "react-router-dom"
import { SiMastercard } from "react-icons/si";
import { SiAmericanexpress } from "react-icons/si";
import { SiApplepay } from "react-icons/si";
import { SiVisa } from "react-icons/si";
import { SiPaypal } from "react-icons/si";
import { SiReact, SiReactHex } from '@icons-pack/react-simple-icons';


export default function Cart() {
    const {cart, setCart} = React.useContext(DataContext)


    console.log(cart.length)
    return (

    <div>
        <div className="cart-container">
            { cart.length <= 0 ?
                <div className="cart-left-container">
                    <h1 className="cart-heading">Your cart is empty</h1> 
                    <div>
                        <h3 className="cart-subheading">There is nothing in your cart yet</h3>
                        <p><Link to="/login" className="cart-login-link">Log in</Link> to access already saved items in your shopping bag.</p>
                        
                    </div>
                </div>  : 
                <h2></h2>
            }
            <div className="cart-right-container">
                <p className="cart-total">Total </p>
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