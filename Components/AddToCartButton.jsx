import React from 'react'
import {DataContext} from "../src/App"
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../src/index"
import {getCart} from "../Data/api"

export default function AddToCartButton({productId, className, children, popUpClass}) {
    const {authenticated, cart, setCart} = React.useContext(DataContext)
    const [updatedCart, setCartUpdated] = React.useState(false)
    const [popUpDisplay, setPopUpDisplay] = React.useState(false)
    console.log(popUpClass)

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
            setPopUpDisplay(true)
            if(cart[productId]) {
                setCart(oldCart => {
                    return {
                        ...oldCart,
                        [productId]: cart[productId]++
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
            setTimeout(() => {
                setPopUpDisplay(false);
              }, 1200);
        }
        else {
            alert("Please log in to add items to the cart.")
        }
    }

    return <div>
                <div className={className}
                onClick={handleClick}>
                    {children} 
                </div>
                {popUpDisplay ?
                <p className={popUpClass}>Added to the cart.</p> :
                null}
            </div>

}

