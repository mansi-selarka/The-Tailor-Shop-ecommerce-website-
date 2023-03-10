import React from 'react'
import Link from 'next/link'
import { AiFillPlusSquare ,AiFillMinusSquare } from 'react-icons/ai';
import { GiShoppingBag } from 'react-icons/gi';

const Checkout = ({cart,addtoCart,removeFromCart,subTotal}) => {
  return (
    <div class="container m-auto ">
      <h1 class="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className='font-bold text-xl'>1. Delivery Details</h2>
      <div class="mx-auto flex my-4">
        <div class = "px-2 w-1/2">
        <div class=" mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="email" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
    </div>
        <div class = "px-2 w-1/2">     
        <div class="mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>   
      </div>
      </div>
  </div>    
      <div class="relative mb-4">
        <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
        <textarea id="address" name="address" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
  </div>
  <div class="mx-auto flex my-4">
        <div class = "px-2 w-1/2">
        <div class=" mb-4">
        <label for="phone" class="leading-7 text-sm text-gray-600">Phone</label>
        <input type="text" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
    </div>
        <div class = "px-2 w-1/2">     
        <div class="mb-4">
        <label for="City" class="leading-7 text-sm text-gray-600">City</label>
        <input type="text" id="city" name="city" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>   
      </div>
      </div>
    </div>
    <div className='mx-auto flex my-4'>
      <div class = "px-2 w-1/2">
        <div class=" mb-4">
        <label for="state" class="leading-7 text-sm text-gray-600">State</label>
        <input type="text" id="state" name="state" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
    </div>
        <div class = "px-2 w-1/2">     
        <div class="mb-4">
        <label for="pincode" class="leading-7 text-sm text-gray-600">Pin Code</label>
        <input type="text" id="pincode" name="pincode" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>   
      </div>
      </div>
  </div>    
 <div> <h2 className='font-bold text-xl'>2. Review Cart items</h2></div> <br /> <br/>
  <div className='sideCart  bg-pink-100 px-8 py-10 '>
          
           <ol className='font-semibold'>
                {Object.keys(cart).length ==0 && <div className = 'my-4 text-base'>No items in the cart</div>}
                {Object.keys(cart).map((k) => {return <li key={k}>
                    <div className='item flex my-5'>
                    <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                    <div className='w-1/3 flex items-center justify-center text-xl'><AiFillPlusSquare onClick={()=>{addtoCart(k,cart[k].qty,cart[k].price,cart[k].name,cart[k].variant)}} className='mx-2 text-pink-500 cursor-pointer'/>{cart[k].qty}<AiFillMinusSquare  onClick={()=>{removeFromCart(k,cart[k].qty,cart[k].price,cart[k].name,cart[k].variant)}} className='mx-2 cursor-pointer text-pink-500' /></div>
                    </div>
                    </li>
                })}
                   
            </ol>
            <span className='font-bold' >SubTotal: {subTotal}</span>
            </div>

            <div className=' my-4'>
            <Link href={'/order'}><button class="flex mx-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
            <GiShoppingBag className='m-1' />Pay  ${subTotal}</button></Link>
            </div>
  </div>
  )
}

export default Checkout
