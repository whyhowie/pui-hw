// ADD TO CART BEHAVIOR
const Cart = []; // This should be an array of Roll's
let totalPrice = 0;
let numItems = 0;   // number of items

const CartInfo = () => { 
    return (
        <span>{numItems} items</span>,<br/>,
        <span>Total: {totalPrice}</span>,<br>,
        </br>
    )
};

function addToCart() {
    // To be completed
    console.log("added to cart");
}



export {CartInfo, addToCart}