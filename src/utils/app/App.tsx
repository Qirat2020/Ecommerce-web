"use client"

import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from"@/redux/store";
import Navbar from '@/components/Navbar';
import Cart from '@/components/Cart';


const App = ({
    children,
}: {
  children: React.ReactNode;
}) => {
const [showCart, setShowCart]=useState (false);


   return <Provider store={store}>
    <Navbar setShowCart={setShowCart} />
    {showCart && <Cart setShowCart={setShowCart}/>}
    {children}
     </Provider>;
   
}

export default App
