import Link from 'next/link';
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Navbar = ({setShowCart} :any) => {
const cartCount =useAppSelector((state) => state.cartReducer.length)

  return  ( 
     <div className='bg-white py-4 sticky top-0 z-10'> 
    <div className="container flex justify-between items-center">
        
        <Link href="/" className='text-4xl font-semibold hover:text-accent'>
        Good Blush
        </Link>
        <RxHamburgerMenu className='sm:hidden text-[26px]' />

<ul className='gap-6  hidden sm:flex'>
    <Link href="/" className='navLink'>Home</Link>
    <li className='navLink'>  <Link href="components/Shop"></Link>Shop</li>
    <li className='navLink'>Blogs</li>
    <li className='navLink'>Pages</li>
    <li className='navLink'>Contact</li>
</ul>

<div className='flex gap-6 text-[26px]'>
    <div className='relative cursor-pointer'
    onClick={()=> setShowCart(true)}
      >
        <AiOutlineShoppingCart />
        <div className='absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center'>
            {cartCount}
        </div>



</div>
</div>
    </div>
    </div>
);
};

export default Navbar
