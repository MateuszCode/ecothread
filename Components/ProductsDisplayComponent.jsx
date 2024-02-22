import React from 'react'
import Item from '../src/pages/Item'


export default function productsPanel({productsData, filters, sort}) {
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
        id={product.id}
        key={product.id}
        className="product"
        />
    }) 

    return displayedProducts
}