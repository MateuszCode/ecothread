import React from 'react'
import {DataContext} from "../src/App"
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../src/index"
import {getCart} from "../Data/api"

export default function AddToCartButton({productId, className, children, popUpClass}) {
    const {authenticated, cart, setCart, updatedCart, setCartUpdated} = React.useContext(DataContext)
    const [popUpDisplay, setPopUpDisplay] = React.useState(false)

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
                console.log(cart[productId] + 1)
                if((cart[productId]+1) > 9) {
                alert("Cannot add more items to the cart.")   
                }
               else {
                await updateDoc(docRef, {
                    cart: {
                        ...cart,
                        [productId]: cart[productId] + 1
                    }
                })
               }
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

