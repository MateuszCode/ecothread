import React from 'react'
import {DataContext} from "../App"
import { Link } from "react-router-dom"
import {getFavorites, getProductsData} from "../../Data/api"
import ItemCard from "../../Components/ItemCard"

export default function FavoritesPage() {
    const {authenticated} = React.useContext(DataContext)
    const [favorites, setFavorites] = React.useState([])
    const [favoriteProducts, setFavoriteProducts] = React.useState([])
    const [productsData, setProductsData] = React.useState([])
    React.useEffect(function() {

        async function fetchData() {
            try {
            const json = await getProductsData()
            setProductsData(json)
            } finally {
            console.log(productsData)
            }
        }
        fetchData()
        
        }, [])

    React.useEffect(() => {
        async function fetchFavorites() {
            const data = await getFavorites()
            setFavorites(data) 
        }
        authenticated ? fetchFavorites()             
        : null
    }, []) 

    React.useEffect(() => {
        setFavs()

    }, [favorites, productsData])

    function setFavs() {
        const productsArray = []
        if(favorites.length > 0 && productsData.length > 0) {
            favorites.map(id => {
                productsData.map(product => {
                    if(id === product.id) {
                        productsArray.push(product)
                        
                    } else {
                        return false
                    }
                })
            })  
        setFavoriteProducts(productsArray)
      
    }
}

    const displayedProducts = favoriteProducts.length > 0 ? favoriteProducts.map(product => {
        return (
        <ItemCard
        title={product.title}
        description={product.description}
        price={product.price}
        image={product.image}
        rating={product.rating.rate}
        ratingCount={product.rating.count}
        id={product.id}
        key={product.id}
        className="favorite-item"
        /> 
        )
    }) : null
    

    function favoritesComponent() {
        if (displayedProducts) {
            return ( <div>
                        <h1 className="favorites-heading">Your favorite items:</h1>
                        <div className="favorite-products">{displayedProducts}</div>
                    </div>)
        }            
        else if (authenticated) {
            return <div>
                <h1 className="favorites-heading">You don't have any favorited items yet.</h1>
                <p>Want to favorite an item? Simply click the heart icon next to it.</p>
                </div>
        } else {
            return <h1 className="favorites-heading">
            Please <Link to="/login" className="favorites-login">log in</Link> to add favorite items.</h1>
        }
    }

    return <div className="favorites-container">{favoritesComponent()}</div>
}