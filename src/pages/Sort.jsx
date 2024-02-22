import React from 'react'

export default function Sort({setSort}) {

    const [dropdown, setDropdown] = React.useState(false)


    const onOptionChangeHandler = (event) => {
        setSort(event.target.value)
    };

    return (
        <div className='sort-container'>
            <h4 onClick={() => setDropdown(oldValue => !oldValue)}
               style={{cursor:"pointer"}}
                className='sort-heading'
            >Sort items:</h4>
                <div className="sort-buttons"
                style={{display: dropdown ? "block" : "none" }}
                > 
                        <button value="default" onClick={onOptionChangeHandler} className="sort-btn">
                            Default
                        </button>
                        <button value="sortAscending" onClick={onOptionChangeHandler} className="sort-btn">
                            Price ascending
                        </button>
                        <button value="sortDescending" onClick={onOptionChangeHandler} className="sort-btn">
                            Price descending
                        </button>
                </div>
        </div>
    )
}