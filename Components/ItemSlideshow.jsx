import React from 'react'
import {getProductsData} from '../Data/api'
import { Link } from "react-router-dom"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

 
export default function ItemSlideshow() {

    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [productsData, setProductsData] = React.useState([])
   
    React.useEffect(function() {

    async function fetchData() {
        setError(null)
        setLoading(true)
        try {
        const json = await getProductsData()
        setProductsData(json)
        } finally {
            setLoading(false)
        }
    }
    fetchData()
    
    }, [])

    const slideshowElement = productsData.map(product => {

        return  (
        <div key={product.id}>
            <Link to={`/shop/${product.id}`}
                state={{itemId: product.id}}>
                <img src={product.image} className="slide-img" />
            </Link>
        </div>
          
                
        )
    })

   
    const responsiveSettings = [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ];


    return (
        loading ? 
        <div style={{height:"400px"}}></div> :
        <div className="slide-container">
          <Slide duration={4000} slidesToShow={1} slidesToScroll={1} responsive={responsiveSettings} indicators={false}>
            {slideshowElement}
          </Slide>
        </div>
      )
    
}
