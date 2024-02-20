import React from 'react'

export default function Sort({setSort}) {

    const onOptionChangeHandler = (event) => {
        setSort(event.target.value)
    };

    return (
        <div>
            <p>Sort Items</p>
                        <button value="default" onClick={onOptionChangeHandler}>
                            Default
                        </button>
                        <button value="sortAscending" onClick={onOptionChangeHandler}>
                            Price ascending
                        </button>
                        <button value="sortDescending" onClick={onOptionChangeHandler}>
                            Price descending
                        </button>
        </div>
    )
}