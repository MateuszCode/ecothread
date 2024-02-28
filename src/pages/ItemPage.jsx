import React from 'react'
import { useParams, Link } from "react-router-dom";
import {getProductData} from '../../Data/api'
import { FaStar } from "react-icons/fa";
import FAQ from '../../Components/FAQComponent'
import HeartComponent from '../../Components/HeartComponent'
import AddToCartButton from '../../Components/AddToCartButton'

export default function ItemPage() {
    const [loading, setLoading] = React.useState(true)
    const [product, setProduct] = React.useState({})
    const [dropdown, setDropdown] = React.useState(false)
    const params = useParams()


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
                        <AddToCartButton 
                        productId={params.id}
                        className="add-to-cart-btn"
                        popUpClass="add-to-cart-popup">
                            Add to the cart
                        </AddToCartButton>
                        <HeartComponent productId={product.id}/>
                    </div>  
                </div>


            </div>       
                <FAQ />
            </div> 
    )
}