import React from 'react';
import { useSearchParams, useLocation, useParams, Link } from "react-router-dom";


export default function CategoryFilters({setFilters}) {

    const [activeButton, setActiveButton] = React.useState("")
    const [dropdown, setDropdown] = React.useState(false)

    function handleClick(event) {
        if (event.target.id === activeButton) {
            setActiveButton(null)
            setFilters(oldFilters => {

                return {...oldFilters, category: null}
            })
        } else {
            setActiveButton(event.target.id)
            setFilters(oldFilters => {

                return {...oldFilters, category: event.target.value}
            })
        }
        
    }
    
    return (
        <div className="category-filters-container">
            <h3 
            onClick={() => setDropdown(oldValue => !oldValue)}
            style={{cursor:"pointer"}}
            className="category-heading"
            >Category:</h3>
            <div style={{display: dropdown ? "none" : "block" }} className="category-filters">
                <button 
                id="1" 
                value="men's clothing"  
                className={activeButton === "1" ? "active-cat-filter-btn cat-filter-btn" : "cat-filter-btn"} 
                onClick={handleClick}>
                    Men
                </button>
                <button 
                id="2" 
                value="women's clothing"  
                className={activeButton === "2" ? "active-cat-filter-btn cat-filter-btn" : "cat-filter-btn"} 
                onClick={handleClick}>
                    Women
                </button>
                <button 
                id="3" 
                value="jewelery"  
                className={activeButton === "3" ? "active-cat-filter-btn cat-filter-btn" : "cat-filter-btn"} 
                onClick={handleClick}>
                    Jewelery
                </button>
                <button onClick={handleClick} className="cat-filter-btn">
                    All categories
                </button>
            </div>
        </div>
    )
}