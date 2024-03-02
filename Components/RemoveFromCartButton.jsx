import React from 'react'
import {getCart} from '../Data/api'
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../src/index"
import {DataContext} from "../src/App"

export default function RemoveFromCartButton({productId}) {
    const {authenticated, cart, setCart} = React.useContext(DataContext)
    const [updatedCart, setCartUpdated] = React.useState(false)
    React.useEffect(() => {
        async function fetchCart() {
            const data = await getCart()
            setCart(data)   
            setCartUpdated(false)
    
        }
        authenticated ? fetchCart() : null
    }, [updatedCart])  
    
    
    async function handleClick() {
        setCartUpdated(false)
        const docRef = doc(db, "users", authenticated);
        console.log(cart)
        await updateDoc(docRef, {
            cart: {
            ...cart,
            [productId]: cart[productId]-1       
            }
            })
            setCartUpdated(true)
    }
    
    return <button onClick={handleClick}>-</button>
}