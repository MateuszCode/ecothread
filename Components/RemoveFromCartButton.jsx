import React from 'react'
import {getCart} from '../Data/api'
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../src/index"
import {DataContext} from "../src/App"
import { CiTrash } from "react-icons/ci";

export default function RemoveFromCartButton({productId}) {
    const {authenticated, cart, setCart, updatedCart, setCartUpdated} = React.useContext(DataContext)
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
        await updateDoc(docRef, {
            cart: {
            ...cart,
            [productId]: 0      
            }
            })
            setCartUpdated(true)
    }

    return <button className="remove-item" onClick={handleClick}><CiTrash />
    </button>
}