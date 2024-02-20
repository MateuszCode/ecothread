import React from 'react'
import Filters from './Filters'
import Item from './Item'
export default function Shop() {

    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [productsData, setProductsData] = React.useState([])
    const [filters, setFilters] = React.useState({
        category: null,
        priceRange: null,
        rating: null
    })

    React.useEffect(function() {

        async function fetchData() {
            setError(null)
            setLoading(true)
            try {
            const data = await fetch('https://fakestoreapi.com/products')
            const json = await data.json();
            setProductsData(json)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const productsWithoutElectronics = productsData.filter(product => {
        return product.category != "electronics"
    })

    const displayedProducts = productsWithoutElectronics.map(product => {


        return <Item
        title={product.title}
        description={product.description}
        price={product.price}
        image={product.image}
        rating={product.rating.rate}
        ratingCount={product.rating.count}
        key={product.id}
        className="product"
        />

    })

    return (loading ? <h1>Loading</h1> : 
    
    <div className="shop-page">
        <div className="top-pannel">
            <p>Sort placeholder</p>
        </div>
        <div className="filters-products">
            {/* <Filters onChange={setPriceRange} priceRange={priceRange}
            setCategory={setCategory}
            /> */}
            <div className="filters">
                <p>
                    Filters placeholder
                </p>
            </div>
            <div className="products">
                {displayedProducts}
            </div>

        </div>
        

    </div>
    )
}