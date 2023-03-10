import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { GiConsoleController } from 'react-icons/gi'

function MyApp({ Component, pageProps }) {
  const [cart,setCart ] = useState({})
  const [subTotal,setSubTotal ] = useState(0)
  useEffect(() => {
   console.log("Hey I am a useeffect from app.js")
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
       }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
   
  }, [])
  

  const saveCart = (myCart) =>{
    localStorage.setItem("cart",JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(cart)
    for(let i=0; i<keys.length; i++) {
  
        subt += myCart[keys[i]].price * myCart[keys[i]].qty;
      
    }
    setSubTotal(subt)
  }
  const addtoCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if(itemCode in cart) {
      newCart[itemCode].qty  = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = {qty:1, price, name, size,variant} 
    }
    setCart(newCart)
    console.log(newCart)
    saveCart(newCart)
  }

  const clearCart = () =>{
    setCart({})
    
    saveCart({})
  }
  
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if(itemCode in cart) {
      newCart[itemCode].qty  = cart[itemCode].qty - 1
    }
    console.log(itemCode)
     if(newCart[itemCode]['qty']<=0){
      delete newCart[itemCode]
     }
    setCart(newCart)
    saveCart(newCart)
  }

  return <>
  <Navbar cart={cart} addtoCart={addtoCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  <Component cart={cart} addtoCart={addtoCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
