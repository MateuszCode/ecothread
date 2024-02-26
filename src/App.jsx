import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import ItemPage from "./pages/ItemPage"
import LoginPage from "./pages/LoginPage"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import AuthRequired from "../Components/AuthRequired"
import UserAccount from "./pages/UserAccount"

const DataContext = React.createContext()


export default function App() {
  const [userData, setUserData] = React.useState({})
  const [authenticated, setAuthenticated] = React.useState(false)
  const [cart, setCart] = React.useState([
    {productId: 20, quantity: 3},
    {productId: 10, quantity: 2}
  ])
  const [favorites, setFavorites] = React.useState([])


    return (
          <BrowserRouter>
          <DataContext.Provider
          value={{userData, setUserData, authenticated, setAuthenticated, cart, setCart, favorites, setFavorites}}
          >
            <Header authenticated={authenticated}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />}>Contact</Route>
              <Route path="/shop/:id" element={<ItemPage />} />
              <Route path="/login" element={<LoginPage setUserData={setUserData} setAuthenticated={setAuthenticated}
              authenticated={authenticated}/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
              <Route element={<AuthRequired authenticated={authenticated}/>}>
                <Route path="/your-account" 
                element={<UserAccount 
                userData={userData}
                setUserData={setUserData}
                setAuthenticated={setAuthenticated}/>} />
              </Route>
            </Routes>
            </DataContext.Provider>
            <Footer />
          </BrowserRouter>
        )
      
}

export {DataContext}