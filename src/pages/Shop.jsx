import React from 'react'
import CategoryFilters from '../../Components/CategoryFilters'
import Item from './Item'
export default function Shop() {

    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [productsData, setProductsData] = React.useState([])
    const [filters, setFilters] = React.useState({
        category: null,
        price: null,
        rating: null
    })

    React.useEffect(function() {

        async function fetchData() {
            setError(null)
            setLoading(true)
            try {
            const data = await fetch('https://fakestoreapi.com/products')
            const json = await data.json();
            setProductsData(json.filter(product => {
                            return product.category != "electronics"
            }))
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    function filterProducts(products) {

        const filteredProducts = products.filter(product => {
            const categoryFilter = filters.category ? filters.category : product.category
            const priceFilter = filters.price ? filters.price : product.price
            const ratingFilter = filters.rating ? filters.rating : product.rating.rate

            if (product.category === categoryFilter && 
                product.rating.rate >= ratingFilter && 
                product.price <= priceFilter) {
                return true 
            } else {
                return false
            }

        })

        return filteredProducts
    }

    const displayedProducts = filterProducts(productsData).map(product => {

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
            <CategoryFilters setFilters={setFilters}/>
            <PriceSlider setFilters={setFilters}/>
            <div className="products">
                {displayedProducts}
            </div>

        </div>
        

    </div>
    )
}