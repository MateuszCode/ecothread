import React from 'react'
import {DataContext} from "../src/App"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../src/index"
import {getFavorites} from "../Data/api"

export default function HeartComponent({productId}) {
    const [favorites, setFavorites] = React.useState([])
    const [updatedFavorites, setFavoritesUpdated] = React.useState(false)
    const {authenticated} = React.useContext(DataContext)

    React.useEffect(() => {
        async function fetchFavorites() {
            const data = await getFavorites()
            setFavorites(data)            
        }
        authenticated ? fetchFavorites() : null
    }, [favorites])  

    async function handleFavorites() {
        setFavoritesUpdated(false)
        if (authenticated) {
            const docRef = doc(db, "users", authenticated);
            if (favorites.includes(productId)) {
                const newArray = favorites.filter(index => index !== productId)
                await updateDoc(docRef, {
                    favorites: newArray
                })
                setFavoritesUpdated(true)
            } else {
                await updateDoc(docRef, {
                    favorites: [...favorites, productId]
                })
                setFavoritesUpdated(true)
            }   
        }
        else {
            alert("Please log in to favorite items.")
        }
    
}

return (authenticated ? 
    favorites.includes(productId) ?
    <FaHeart
    onClick={handleFavorites} 
    className="favorite-btn"/> :
    <FaRegHeart 
    onClick={handleFavorites}
    className="favorite-btn"/> : 
    <FaRegHeart 
    onClick={handleFavorites}
    className="favorite-btn"/>)
    
}