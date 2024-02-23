import React from 'react'

export default function({userData, setUserData, setAuthenticated}) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function handleClick() {
        setUserData({})
        setAuthenticated(false)
    }


    console.log(userData)
    return (
        userData.username ? 
        <div className="user-account-container">
            <h1>Welcome back {userData.username}!</h1>
            <div className="user-info-container">
            <h2 className="user-account-headings">Delievery details:</h2>
                <div>
                    <p className="user-details">Name: {capitalizeFirstLetter(userData.name.firstname)}</p>
                    <p className="user-details">Last Name: {capitalizeFirstLetter(userData.name.lastname)}</p>
                    <p className="user-details">City: {capitalizeFirstLetter(userData.address.city)}</p>
                    <p className="user-details">Street: {capitalizeFirstLetter(userData.address.street)} {userData.address.number}</p>
                    <p className="user-details">Zip code: {userData.address.zipcode}</p>
                    <p className="user-details">Phone: {userData.phone}</p>
                </div>
            <h2 className="user-account-headings">Your orders:</h2>
                <div>
                    <p className="user-details">You don't have any orders at the moment.</p>
                </div>
            <h2 className="user-account-headings">Your favorite items:</h2>
                <div>
                    <p className="user-details">You don't have any favoirte items at the moment.</p>
                </div>

            <button className="log-out-btn"
            onClick={handleClick}>Log out</button>
            </div>
        </div> : null
    )
}

