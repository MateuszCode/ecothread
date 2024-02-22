import React from 'react';import CategoryFilters from '../../Components/CategoryFilters'
import { useSearchParams, useLocation  } from "react-router-dom";
import Sort from '../../Components/Sort'
import ProductsPanel from '../../Components/ProductsDisplayComponent'
import {getProductsData} from '../../Data/api'

export default function Shop() {

    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [productsData, setProductsData] = React.useState([])
    const [filters, setFilters] = React.useState({
        category: null,
        minPrice: null,
        maxPrice: null,
        rating: null
    })
    const [sort, setSort] = React.useState("default")


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
    

    return (
    <div className="shop-page">
        <div className="top-pannel">
            <Sort setSort={setSort} />
        </div>
        <div className="filters-products"> 
            <div className="filters">
              <CategoryFilters setFilters={setFilters}/>
            </div>
            <div className="products">
                <ProductsPanel
                productsData = {productsData}
                filters = {filters}
                sort = {sort} 
                />
            </div>

        </div>
    </div>
    )
}

