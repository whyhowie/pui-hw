import React, { useEffect, useRef, useContext } from "react";
import { CartContext } from "./CartContext";
import './Cart.css'

// DEFAULT DISPLAY OF CART INFORMATION (WITH POPUP)
const CartInfo = () => { 
    const cartPopupRef = useRef(null);
    // Create a reference: https://reactjs.org/docs/refs-and-the-dom.html
    const [cart, setCart, isAddingToCart, setIsAddingToCart] = useContext(CartContext);
    // Based on: https://www.youtube.com/watch?v=hhAT0CJDWqM

    const totalPrice = cart.reduce((total, currentItem) => total + parseFloat(currentItem.price), 0)

    // Show a popup whenever cart is updated
    // This is purely javascript
    // https://reactjs.org/docs/hooks-effect.html 
    useEffect( () => {
        const popupEl = cartPopupRef.current
        if (popupEl && cart.length>0 && isAddingToCart==true) {
            // Run this only when we add things to cart
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
            // after popup, reset the isAddingToCart status
            setIsAddingToCart(false)
        }
    })

    return (
        <React.Fragment>
            <div className="cart-info" >
                <span> {cart.length} items</span><br/>
                <span>Total: ${totalPrice.toFixed(2)}</span><br/>
                <br/>
            </div>
            <div className="cart-popup" ref={cartPopupRef}>
            </div>   

        </React.Fragment>
    )
};



// EXPANDED VIEW FOR THE CART
const CartView = () => {
    const cartViewRef = useRef(null);
    // Create a reference: https://reactjs.org/docs/refs-and-the-dom.html

    const [cart, setCart] = useContext(CartContext);
    // Based on: https://www.youtube.com/watch?v=hhAT0CJDWqM

    const totalPrice = cart.reduce((total, currentItem) => total + parseFloat(currentItem.price), 0)

    let cartViewElement = [];
    
    cart.forEach( (eachCartItem) => {
        // Note: we are not using the index as the second argument here because an item's index will
        //  change whenever we remove an item from the cart. Instead, to refer to each item in the 
        //  cart, we use the inCartID created in the addToCart() function in GridItem.js.
        //  
        // https://stackoverflow.com/questions/10179815/get-loop-counter-index-using-for-of-syntax-in-javascript

        let inCartID = eachCartItem.inCartID

        cartViewElement.push(
            <div className="cart-view-item" key={"cart-view-item-" + inCartID}>
                <img src={eachCartItem.imgSrc} /> <br/>
                <span className="cart-view-text"> { eachCartItem.name } </span><br/>
                <span className="cart-view-text"> Glazing: { eachCartItem.glazing } </span><br/>
                <span className="cart-view-text"> Pack Size: { eachCartItem.packSize } </span><br/>
                <span className="cart-view-text"> <b>$ { eachCartItem.price }</b> </span><br/>

                <a className="cart-view-text" href="#/" onClick={() => {
                    setCart(currentCart => currentCart.filter(cartItem => cartItem.inCartID !== inCartID))
                }}> Remove </a>
                {/* User "#/" so the page won't jump */}
            </div>
        )
    })


    return (
        <React.Fragment>
            <div className="cart-view" ref={cartViewRef}>
                <div className="cart-view-title-container">
                    <h4> Shopping Cart ({cart.length}) </h4>
                    <h4> Total: ${totalPrice.toFixed(2)} </h4>
                </div>
                {cart.length > 0 ? 
                    <div className="cart-view-grid" >
                        {/* css set in Cart.css */}
                        { cartViewElement }
                    </div> :
                    <h3> The cart is empty! <br /><br /> </h3>
                }
            </div>
        </React.Fragment>
    )

}


export {CartInfo, CartView}