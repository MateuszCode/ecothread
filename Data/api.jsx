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
