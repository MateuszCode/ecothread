import React from 'react'
import { useSearchParams, useLocation, useParams, Link } from "react-router-dom";
import {getProductData} from '../../Data/api'
import { FaStar } from "react-icons/fa";
import {DataContext} from "../App"
import FAQ from '../../Components/FAQComponent'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {db} from "../index"

export default function ItemPage() {
    const [loading, setLoading] = React.useState(true)
    const [product, setProduct] = React.useState({})
    const [dropdown, setDropdown] = React.useState(false)
    const [favorites, setFavorites] = React.useState([])
    const [updatedFavorites, setFavoritesUpdated] = React.useState(false)
    const location = useLocation() 
    const params = useParams()
    const {cart, setCart, authenticated, userData, setUserData} = React.useContext(DataContext)


    React.useEffect(function() {
        async function fetchData() {
            setLoading(true)
            try {
            const json = await getProductData(params.id)
            setProduct(json)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
      

        }, [])


    React.useEffect(() => {
            async function getFavorites() {
              const docRef = doc(db, "users", authenticated);
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                const data = docSnap.data()
                setFavorites(data.favorites)
              } else {
                console.log("No such document!");
              }
            }
            authenticated ? getFavorites() : null
    }, [favorites])  

    async function handleFavorites() {
            setFavoritesUpdated(false)
            if (authenticated) {
                const docRef = doc(db, "users", authenticated);
                if (favorites.includes(product.id)) {
                    const newArray = favorites.filter(index => index !== product.id)
                    await updateDoc(docRef, {
                        favorites: newArray
                    })
                    setFavoritesUpdated(true)
                } else {
                    await updateDoc(docRef, {
                        favorites: [...favorites, product.id]
                    })
                    setFavoritesUpdated(true)
                }   
            }
            else {
                alert("Please log in to favorite items.")
            }
        
    }

    return (loading ? 
            <h1>Loading</h1> :
            <div>
                <Link
                to=".."
                relative="path"
                className="item-page-back-btn">Back to all items</Link>
            <div className="item-page-container">
                    <img src={product.image} className="item-page-img"/>
                <div className="item-page-info">
                    <h3 className="item-page-title">{product.title}</h3>
                    <p className="rating">
                        {product.rating.rate} 
                        <FaStar className="star-icon"/>
                        ({product.rating.count})
                    </p>
                    <p className="item-page-price">{product.price}$</p>
                    <div className="item-page-description-div">
                        <h4 className="item-page-description-heading"
                        >Description:</h4>
                        <p className="item-page-description"
                        onClick={() => setDropdown(oldValue => !oldValue)}
                        style={{cursor:"pointer"}}
                        >
                        {dropdown ? product.description : product.description.length > 100 ?
                        `${product.description.substring(0, 100)}...` : product.description
                        }
                        </p>
                    </div>
                    <div className="cart-btn-container">
                        <button className="add-to-cart-btn">Add to the cart</button>
                    
                        {
                        authenticated ? 
                        favorites.includes(product.id) ?
                        <FaHeart
                        onClick={handleFavorites} 
                        className="favorite-btn"/> :
                        <FaRegHeart 
                        onClick={handleFavorites}
                        className="favorite-btn"/> : 
                        <FaRegHeart 
                        onClick={handleFavorites}
                        className="favorite-btn"/>
                        }
                    </div>  
                </div>


            </div>       
                <FAQ />
            </div> 
    )
}