// THIS SCRIPT CREATES A DATABASE OF PRODUCTS

// https://www.youtube.com/watch?v=UcrypywtAm0
// I think this is a cleaner way to populate the page with products


class Roll {
    constructor(imgSrc, type, price, rollID) {
        this.imgSrc = imgSrc;
        this.type = type;
        this.price = price;
        // this.glazing = glazing;
        // this.glazingPrice = 0;
        // this.packSize = packSize;
        this.elementID = rollID; // the element ID doesn't contain the #
    }
}


// GENERATE ROLL OBJECTS
// (DON'T FORGET TO UPDATE THE Rolls ARRAY AT THE END)
const originalCinnamon = new Roll(
    '/assets/products/original-cinnamon-roll.jpg',   // image
    'Original Cinnamon Roll',   // type (name)
    2.49,   // price
    // 'Keep Original', // glazing
    // 1,  // pack size
    'original-cinnamon-roll'    // id
)

const appleCinnamon = new Roll(
    '/assets/products/apple-cinnamon-roll.jpg',
    'Apple Cinnamon Roll',
    3.49,
    // 'Keep Original',
    // 1,
    'apple-cinnamon-roll'
)

const raisinCinnamon = new Roll(
    '/assets/products/raisin-cinnamon-roll.jpg',
    'Raisin Cinnamon Roll',
    2.99,
    // 'Keep Original',
    // 1,
    'raisin-cinnamon-roll'
)

const walnutCinnamon = new Roll(
    '/assets/products/walnut-cinnamon-roll.jpg',
    'Walnut Cinnamon Roll',
    2.49,
    // 'Keep Original',
    // 1,
    'walnut-cinnamon-roll'
)

const doubleChocolateCinnamon = new Roll(
    '/assets/products/double-chocolate-cinnamon-roll.jpg',
    'Double Chocolate Cinnamon Roll',
    3.49,
    // 'Keep Original',
    // 1,
    'double-chocolate-cinnamon-roll'
)

const strawberryCinnamon = new Roll(
    '/assets/products/strawberry-cinnamon-roll.jpg',
    'Strawberry Cinnamon Roll',
    2.99,
    // 'Keep Original',
    // 1,
    'strawberry-cinnamon-roll'
)

export const rolls = [
    originalCinnamon, appleCinnamon, raisinCinnamon,
    walnutCinnamon, doubleChocolateCinnamon, strawberryCinnamon
];









// GLAZING
export const glazings = [
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
export const packSizes = [
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
        value: 5
    },
    {
        option: "12",
        value: 10
    }
]
