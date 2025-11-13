// import React, { useEffect, useState } from 'react'

// function App() {
//   var [data,setData]=useState([])
//   var [cart,setCart]=useState([])
//   async function fetchData() {
//     var result = await fetch("https://fakestoreapi.com/products")
//     var myResult=await result.json()
//     setData(myResult)
    
//   }
//   useEffect(()=>{fetchData()},[])
// function addToCart(myItem) {
//   var existingItem=cart.find(cartItem=>cartitem.Id===myItem.id)
//   if(!existingItem){
//     setCart([...cart,myItem])
//   }
//   else{
//     alert("exists in the cart")
//   }
//   }
//   function removeCart(myItem) {
//     var newCart=cart.filter(item=>item.id!==myItem.id)
//     setCart(newCart)
    
//   }
//   console.log(cart);
  
// }
//   return(
//     <div>
//             {
//                 data.map((item)=>{
//                     return(
//                         <div key={item.id}>
//                             <h1>{item.id}</h1>
//                             <h1>{item.title}</h1>
//                             <img src={item.image} alt="" />
//                             <button onClick={()=>addToCart(item)}>AddToCart</button>
//                         </div>

//                     )
//                 })
//             }

//             <div>
//                 <h1>cart { cart.length}</h1>
//                 <div>
//                     {
//                         cart.map((item)=>{
//                             return(
//                                 <div key={item.id}>
//                                     <h1>{item.id}</h1>
//                                     <h1>{item.title}</h1>
//                             <img src={item.image} alt="" />

//                                     <button onClick={ ()=> removeCart(item)}>remove Item</button>
//                                 </div>
//     )
//                         })
//                     }
//                 </div>
//             </div>

//         </div>
//     )

// export default App
// import React, { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//   const [data, setData] = useState([])
//   const [cart, setCart] = useState([])

//   async function fetchData() {
//     const result = await fetch("https://fakestoreapi.com/products")
//     const myResult = await result.json()
//     setData(myResult)
//   }

//   useEffect(() => { fetchData() }, [])

//   function addToCart(myItem) {
//     const existingItem = cart.find(cartItem => cartItem.id === myItem.id)
//     if (!existingItem) {
//       setCart([...cart, myItem])
//     } else {
//       alert("Item already exists in the cart")
//     }
//   }

//   function removeCart(myItem) {
//     const newCart = cart.filter(item => item.id !== myItem.id)
//     setCart(newCart)
//   }

//   return (
//     <div>
//       <div className="products-container">
//         {data.map((item) => (
//           <div className="product-card" key={item.id}>
//             <img src={item.image} alt={item.title} />
//             <h3>{item.title}</h3>
//             <button onClick={() => addToCart(item)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>

//       <div className="cart-container">
//         <h1>Cart ({cart.length})</h1>
//         <div className="cart-items">
//           {cart.map((item) => (
//             <div className="cart-item" key={item.id}>
//               <img src={item.image} alt={item.title} />
//               <h3>{item.title}</h3>
//               <button onClick={() => removeCart(item)}>Remove</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])

  async function fetchData() {
    const result = await fetch("https://fakestoreapi.com/products")
    const myResult = await result.json()
    setData(myResult)
  }

  useEffect(() => { fetchData() }, [])

  function addToCart(myItem) {
    const existingItem = cart.find(cartItem => cartItem.id === myItem.id)
    if (!existingItem) {
      setCart([...cart, myItem])
    } else {
      alert("Item already exists in the cart")
    }
  }

  function removeCart(myItem) {
    const newCart = cart.filter(item => item.id !== myItem.id)
    setCart(newCart)
  }

  return (
    <div>
    
        <h1 className="heading">🛍️ Fakestore</h1>

      <div className="products-container">
        {data.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p className="price">₹{(item.price * 83.2).toFixed(2)}</p> {/* Converted from USD to INR */}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

     
      <div className="cart-container">
        <h1>Cart ({cart.length})</h1>
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p className="price">₹{(item.price * 83.2).toFixed(2)}</p>
              <button onClick={() => removeCart(item)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App


