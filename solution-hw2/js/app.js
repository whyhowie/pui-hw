// THIS SCRIPT RENDERS THE PAGE AND DEFINES ADD TO CART BEHAVIOR

// SELECT THE GRID CONTAINER
const productsEl = document.querySelector(".grid-container")

// RENDER PRODUCTS
function renderProducts() {
    Rolls.forEach( (eachRoll) => {
        productsEl.innerHTML += `
            <div class="grid-item" id="${eachRoll.elementID}">
                <img src="${eachRoll.imgSrc}" alt="${eachRoll.type}">
                <h5>${eachRoll.type}</h5>
                <form id="${eachRoll.elementID}-form">
                <fieldset>

                <label for="glazing-${eachRoll.elementID}">Glazing:</label>
                <select name="glazing" id="glazing-${eachRoll.elementID}" onchange="glazingChange(this)">                
                </select>

                <label>Pack size:</label>
                <div class="radio-group" id="radio-group-${eachRoll.elementID}">
                </div>

                <div class="price" id="price-${eachRoll.elementID}">$${eachRoll.price}</div>
                <input type="button" value="Add to Cart" onclick="addToCart('${eachRoll.elementID}')">
                </fieldset>
                </form>
            </div>
        `;
        // Add dropdown options
        for (const glazing of glazings) {
            var opt = document.createElement('option');
            opt.textContent = glazing.option;
            opt.value = glazing.value;
            document.getElementById('glazing-'+eachRoll.elementID).appendChild(opt);
        };
        // Add pack size radio buttons
        for (const packSize of packSizes) {
            radioGroupEl = document.getElementById('radio-group-'+eachRoll.elementID);
            radioGroupEl.innerHTML += `
                <input type="radio" name="radio" id="${eachRoll.elementID}-${packSize.value}"
                    value="${packSize.value}" onclick="packSizeChange(this)";>
                <label class="radio-button-label" for="${eachRoll.elementID}-${packSize.value}">${packSize.value}</label>
            `;
        }
    });
    
}

renderProducts();


// ADD TO CART BEHAVIOR
const Cart = []; // This should be an array of Roll's
let totalPrice = 0;
let numItems = 0;   // number of items
document.querySelector(".cart-info").innerHTML = `
        <span>${numItems} item(s)</span><br>
        <span>Total: ${totalPrice}</span><br>
    `

function addToCart(id) {
    // Toggle the popup (show and hide after some seconds)
    let popUpEl = document.querySelector(".cart-popup");
    // console.log(id);
    popUpEl.classList.toggle("show");
    var t = setTimeout(function() {
        popUpEl.classList.toggle("show")
    },3000);

    // Find the roll object and add to the Cart array:
    const selectedItem = Rolls.find((x => x.elementID===id));
    Cart.push(selectedItem);
    console.log(Cart);
    
    // Find the price from element:
    const itemPrice = parseFloat(document.querySelector(`#${id}`).querySelectorAll(".price")[0].textContent.replace('$',''));

    // Update the popup
    popUpEl.innerHTML = `
        <span class="popuptext"><b>Added to cart:</b></span>
        <br>
        <br>
        <span class="popuptext">${selectedItem.type} Glazing</span><br>
        <span class="popuptext">Pack of ${selectedItem.packSize}</span><br>
        <span class="popuptext">${selectedItem.glazing}</span><br>
        <span class="popuptext">$${itemPrice.toFixed(2)}</span><br>
    `;

    // Update the cart info

    totalPrice += itemPrice;
    numItems = Cart.length;
    document.querySelector(".cart-info").innerHTML = `
        <span>${numItems} item(s)</span><br>
        <span>Total: $ ${totalPrice.toFixed(2)}</span><br>
    `
};