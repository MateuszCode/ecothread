import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import {DataContext} from "../App"

export default function() {
    const auth = getAuth();
    const {setAuthenticated, userData} = React.useContext(DataContext)

    function handleClick() {
        console.log(auth)
        signOut(auth).then(() => {
            setAuthenticated(false)
          }).catch((error) => {
            alert("We had a problem logging you out. Please try again!")
          });
    }

    return (
        userData.firstName ? 
        <div className="user-account-container">
            <h1>Welcome back {userData.firstName}!</h1>
            <div className="user-info-container">
            <h2 className="user-account-headings">Delievery details:</h2>
                <div>
                    <p className="user-details">Name: {userData.firstName}</p>
                    <p className="user-details">Last Name: {userData.lastName}</p>
                    <p className="user-details">City: {userData.address.city}</p>
                    <p className="user-details">Street: {userData.address.street} {userData.address.streetNumber}</p>
                    <p className="user-details">Zip code: {userData.address.zipCode}</p>
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

