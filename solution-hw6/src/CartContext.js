import React, { createContext, useState } from 'react';

// Based on: https://www.youtube.com/watch?v=hhAT0CJDWqM

export const CartContext = createContext()

export const CartProvider = (props) => {
    // let cartTemp = []
    // try {
    //     cartTemp = JSON.parse(localStorage.getItem("cart"))
    // }
    // catch(err) {
    // }

    let cartTemp = JSON.parse(localStorage.getItem("cart")) || []

    const [cart, setCart] = useState(cartTemp);
    // This initializes cart from local storage (if there is anything)
    const [isAddingToCart, setIsAddingToCart] = useState(false)
    // This declares a state variable cart and a function setCart that updates it
    // https://reactjs.org/docs/hooks-state.html
    return (
        <CartContext.Provider value={[cart, setCart, isAddingToCart, setIsAddingToCart]}>
            {props.children}
        </CartContext.Provider>
    )
}