import React from 'react'

 const Order = ({subTotal,qty}) => {
  return (
    <div>
     <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
  <h1 class="font-bold text-3xl my-8 text-black-500">ORDER ID #125432</h1>
      <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Color</span>
          <span class="ml-auto text-gray-900">Blue</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Size</span>
          <span class="ml-auto text-gray-900">Medium</span>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="text-gray-500">Quantity</span>
          <span class="ml-auto text-gray-900">{qty}</span>
        </div>
        <div class="flex">
        <span className='font-bold' >SubTotal: ${subTotal}</span>
          <button class="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Buy Now</button>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
</section>
    </div>
  )
}

export default Order