// THIS SCRIPT CREATES ALL THE CINNAMON ROLL ITEMS

// https://www.youtube.com/watch?v=UcrypywtAm0
// I think this is a cleaner way to populate the page with products


class Roll {
    constructor(imgSrc, type, price, glazing, packSize, rollID) {
        this.imgSrc = imgSrc;
        this.type = type;
        this.price = price;
        this.glazing = glazing;
        // this.glazingPrice = 0;
        this.packSize = packSize;
        this.elementID = rollID; // the element ID doesn't contain the #
    }
}


// GENERATE ROLL OBJECTS
// (DON'T FORGET TO UPDATE THE Rolls ARRAY AT THE END)
const originalCinnamon = new Roll(
    '../assets/products/original-cinnamon-roll.jpg',   // image
    'Original Cinnamon Roll',   // type (name)
    2.49,   // price
    'Keep Original', // glazing
    1,  // pack size
    'original-cinnamon-roll'    // id
)

const appleCinnamon = new Roll(
    '../assets/products/apple-cinnamon-roll.jpg',
    'Apple Cinnamon Roll',
    3.49,
    'Keep Original',
    1,
    'apple-cinnamon-roll'
)

const raisinCinnamon = new Roll(
    '../assets/products/raisin-cinnamon-roll.jpg',
    'Raisin Cinnamon Roll',
    2.99,
    'Keep Original',
    1,
    'raisin-cinnamon-roll'
)

const walnutCinnamon = new Roll(
    '../assets/products/walnut-cinnamon-roll.jpg',
    'Walnut Cinnamon Roll',
    2.49,
    'Keep Original',
    1,
    'walnut-cinnamon-roll'
)

const doubleChocolateCinnamon = new Roll(
    '../assets/products/double-chocolate-cinnamon-roll.jpg',
    'Double Chocolate Cinnamon Roll',
    3.49,
    'Keep Original',
    1,
    'double-chocolate-cinnamon-roll'
)

const strawberryCinnamon = new Roll(
    '../assets/products/strawberry-cinnamon-roll.jpg',
    'Strawberry Cinnamon Roll',
    2.99,
    'Keep Original',
    1,
    'strawberry-cinnamon-roll'
)

const Rolls = [originalCinnamon, appleCinnamon, raisinCinnamon,
    walnutCinnamon, doubleChocolateCinnamon, strawberryCinnamon];



