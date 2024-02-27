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
import SignupPage from "./pages/SignupPage"
import { doc, getDoc } from "firebase/firestore";
import {db} from "./index"

const DataContext = React.createContext()

export default function App() {
  const [userData, setUserData] = React.useState({})
  const [authenticated, setAuthenticated] = React.useState(false)
  const [cart, setCart] = React.useState([
    {productId: 20, quantity: 3},
    {productId: 10, quantity: 2}
  ])
  
  React.useEffect(() => {
    async function getUser() {
      const docRef = doc(db, "users", authenticated);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data()
        setUserData(data)
      } else {
        console.log("No such document!");
      }
    }
   
    authenticated ? getUser() : null
  }, [authenticated])  

    return (
          <BrowserRouter>
          <DataContext.Provider
          value={{userData, setUserData, authenticated, setAuthenticated, cart, setCart}}
          >
            <Header authenticated={authenticated}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />}>Contact</Route>
              <Route path="/shop/:id" element={<ItemPage />} />
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
              <Route path="/signup" element={<SignupPage />}></Route>
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