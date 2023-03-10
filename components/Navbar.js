import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillCartCheckFill } from 'react-icons/bs';
import { AiFillCloseSquare, AiFillPlusSquare ,AiFillMinusSquare } from 'react-icons/ai';
import { GiShoppingBag } from 'react-icons/gi';




const Navbar = ({cart,addtoCart,removeFromCart,clearCart,subTotal}) => {
    console.log(cart,addtoCart,removeFromCart,clearCart,subTotal)

    const toggleCart = () => { 
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }

        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
        

    }
    const ref = useRef()
  return (
    <div className='flex flex-col  md:flex-row md:justify-start justify-between items-center my-2 shadow-md'>
        <div className='logo mx-5'>
            <Link href={'/'}><Image src='/logo.png' alt='' height={70} width={70}/></Link>

        </div>
        <div className='nav'>
            <ul className='flex items-center space-x-4 font-bold md:font-xl'>
                <Link href={'/tshirts'} className="hover:text-pink-500"><li>Tshirts</li></Link>
                <Link href={'/hoodies'} className="hover:text-pink-500"><li>Hoodies</li></Link>
                <Link href={'/stickers'} className="hover:text-pink-500"><li>Stickers</li></Link>
                <Link href={'/mugs'} className="hover:text-pink-500"><li>Mugs</li></Link>
            </ul>
        </div>
        <div onClick={toggleCart} className='cart cursor-pointer absolute right-0 mx-5 top-4'>
            <BsFillCartCheckFill className='text-xl md:text-3xl'/>
        </div>
       <div  ref={ref} className='sideCart w-72 h-full absolute top-0 right-0 bg-pink-100 px-8 py-10  transform transition-transform translate-x-full'>
           <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
           <span onClick={toggleCart} className=' absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'><AiFillCloseSquare/></span>
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
            <div className='flex'>
            <Link href={'/checkout'}><button class="flex mx-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
            <GiShoppingBag className='m-1' />Checkout</button></Link>
            <button  onClick={clearCart} class="flex mx-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
            Clear Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar