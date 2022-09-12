// THIS PAGE INCLUDES ALL THE PRICE MODIFIERS
// AND CALCULATES THE TOTAL PRICES

// https://www.youtube.com/watch?v=UcrypywtAm0
// I think this is a cleaner way to populate the page with products


// GLAZING
const glazings = [
    {
        option: "Keep Original",
        value: 0.00
    },
    {
        option: "Sugar Milk",
        value: 0.00
    },
    {
        option: "Vanilla Milk",
        value: 0.50
    },
    {
        option: "Double Chocolate",
        value: 1.50
    }

];

// PACK SIZE
const packSizes = [
    {
        option: "1",
        value: 1
    },
    {
        option: "3",
        value: 3
    },
    {
        option: "6",
        value: 6
    },
    {
        option: "12",
        value: 12
    }
]

// Initialize variables. These are default values.
let selectedRoll = null;
let selectedRollEl = null;
let priceChange = 0;
let packSize = 1;


function glazingChange(element) {
    // get value of selected glazing option
    priceChange = parseFloat(element.value);
    // console.log(priceChange);

    // select the corresponding roll item
    rollID = element.id.replace('glazing-','');
    selectedRollEl = document.getElementById(rollID);

    // find the coreesponding roll object
    selectedRoll = Rolls.find(x => x.elementID === rollID);
    selectedRoll.glazing = element.textContent;

    // calculate new price
    let newPrice = selectedRoll.packSize * (selectedRoll.price + priceChange);
    // console.log(newPrice);
    selectedRollEl.querySelector(".price").innerHTML = '$' + newPrice.toFixed(2);
};

function packSizeChange(element) {
    // get value of selected pack size option
    packSize = parseInt(element.value);
    console.log(packSize);
    // select the corresponding roll item
    rollID = element.id.replace('-'+element.value,'');
    selectedRollEl = document.getElementById(rollID);

    // find the coreesponding roll object
    selectedRoll = Rolls.find(x => x.elementID === rollID);
    selectedRoll.packSize = element.value;

    // calculate new price
    let newPrice = selectedRoll.packSize * (selectedRoll.price);
    // console.log(newPrice);
    selectedRollEl.querySelector(".price").innerHTML = '$' + newPrice.toFixed(2);

}