import React, { useEffect, useRef, useContext } from "react";
import { CartContext } from "./CartContext";
import './Cart.css'

const CartInfo = () => { 
    const cartPopupRef = useRef(null);
    // Create a reference: https://reactjs.org/docs/refs-and-the-dom.html
    const [cart, setCart] = useContext(CartContext);
    // Based on: https://www.youtube.com/watch?v=hhAT0CJDWqM

    const totalPrice = cart.reduce((total, currentItem) => total + parseFloat(currentItem.price), 0)
    console.log(cart)

    // Show a popup whenever cart is updated
    // This is purely javascript
    // https://reactjs.org/docs/hooks-effect.html 
    useEffect( () => {
        const popupEl = cartPopupRef.current
        if (popupEl && cart.length>0) {
            popupEl.classList.toggle("show");
            var t = setTimeout(function() {
                // set a 3-sec timeout
                popupEl.classList.toggle("show")
            },3000);
            popupEl.innerHTML = `
                <span class="popuptext"><b>Added to cart:</b></span>
                <br/>
                <span class="popuptext">${cart[cart.length-1].name}</span><br/>
                <span class="popuptext">Pack of ${cart[cart.length-1].packSize}</span><br/>
                <span class="popuptext">${cart[cart.length-1].glazing} Glazing</span><br/>
                <span class="popuptext">$${cart[cart.length-1].price}</span><br/><br/>
            `;
        }
    })

    return (
        <React.Fragment>
            <div className="cart-info" >
                {/* css set in Cart.css */}
                <span> {cart.length} items</span><br/>
                <span>Total: ${totalPrice.toFixed(2)}</span><br/>
                <br/>
            </div>
            <div className="cart-popup" ref={cartPopupRef}>
            </div>   

        </React.Fragment>
    )
};


export {CartInfo}