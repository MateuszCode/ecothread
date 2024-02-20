import React from 'react'
import classnames from "classnames"
export default function CardComponent({children, icon, title, className}) {
   
    const allClasses = classnames(`${className} card-container`)
    return (
        <div className={allClasses}>
            <h3 className="card-icon">{icon}</h3>
            <div className="card-info">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{children}</p>
            </div>
        </div>
    ) 
}