import { doc, getDoc, updateDoc } from "firebase/firestore";
import {db} from "../src/index"

export const getProductsData=()=>{
    return fetch('https://fakestoreapi.com/products', { 
                  method:'Get',
              })
              .then(data=> data.json())
              .then(json=> {
                const filteredProductsData = json.filter(product => {
                return product.category != "electronics"
              })
               return filteredProductsData
            })
             
  }

  export const getProductData=(id)=>{
    return fetch(`https://fakestoreapi.com/products/${id}`)
              .then(data=> data.json())
              .then(json=> {
              const productData = json
              return productData
            })
             
  }

  export async function getFavorites() {
    const docRef = doc(db, "users", localStorage.getItem("uid"));
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data()
      return data.favorites
    } else {
      console.log("No such document!");
    }
  }

