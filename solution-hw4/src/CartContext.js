import React, { createContext, useState } from 'react';

// Based on: https://www.youtube.com/watch?v=hhAT0CJDWqM

export const CartContext = createContext()

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    // This declares a state variable cart and a function setCart that updates it
    // https://reactjs.org/docs/hooks-state.html
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}