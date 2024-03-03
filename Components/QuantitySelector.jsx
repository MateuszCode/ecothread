import React from 'react'
import {DataContext} from "../src/App"
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../src/index"

export default function CartItem({productId, quantity}) {
    const {cart, authenticated, setCartUpdated} = React.useContext(DataContext)

    async function handleChange(event) {
        const docRef = doc(db, "users", authenticated);
        console.log(event.target.value)
        await updateDoc(docRef, {
            cart: {
                ...cart,
                [productId]: event.target.value
            }
        })
        setCartUpdated(true)
    }
    

    return (
            <div>
                <select onChange={handleChange} value={quantity}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </div>
            )
}