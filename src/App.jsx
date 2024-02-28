import React from 'react'
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
import FavoritesPage from "./pages/FavoritesPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import {db} from "./index"

const DataContext = React.createContext()

export default function App() {
  const [userData, setUserData] = React.useState({})
  const [cart, setCart] = React.useState({})
  const [authenticated, setAuthenticated] = React.useState(localStorage.getItem("uid"))
  
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
              <Route path="/favorites" element={<FavoritesPage />}></Route>
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