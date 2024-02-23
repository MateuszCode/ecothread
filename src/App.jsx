import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import ItemPage from "./pages/ItemPage"
import LoginPage from "./pages/LoginPage"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

export default function App() {
  const [userData, setUserData] = React.useState({})
  const [authorized, setAuthorized] = React.useState(false)
  console.log(userData)


    return (
          <BrowserRouter>
            <Header authorized={authorized}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />}>Contact</Route>
              <Route path="/shop/:id" element={<ItemPage />} />
              <Route path="/login" element={<LoginPage setUserData={setUserData} setAuthorized={setAuthorized}/>}></Route>
              <Route path="/cart" element={<ItemPage/>}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        )
      
}