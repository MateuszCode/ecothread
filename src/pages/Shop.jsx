import React from 'react'
import CategoryFilters from '../../Components/CategoryFilters'
import Item from './Item'
import Sort from './Sort'
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

            if (product.category === categoryFilter) {
                return true 
            } else {
                return false
            }
        })

        return filteredProducts
    }
 
    function sortProducts() {
        const sortedArray = productsData

        if (sort === "sortAscending") {
            sortedArray.sort((a,b) => a.price - b.price)
        } else if (sort === "sortDescending") {
            sortedArray.sort((a,b) => b.price - a.price)
        } else if (sort === "default") {
            console.log("default")
            sortedArray.sort((a,b) => b.id - a.id)
        }

        return sortedArray

    }

    sortProducts()

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
            <Sort setSort={setSort} />
        </div>
        <div className="filters-products"> 
            <div className="filters">
              <CategoryFilters setFilters={setFilters}/>
            </div>
            <div className="products">
                {displayedProducts}
            </div>

        </div>
        

    </div>
    )
}