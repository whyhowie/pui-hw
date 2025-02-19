import React, { useContext } from 'react'
import { glazings, packSizes } from './Products'
import './GridItems.css'
import { CartContext } from './CartContext'
import { ItemsContext } from './ItemsContext'


// Create a live Item
/* Note: Rolls is an array of Roll's (which simulates data from an inventory spreadsheet). 
    Here we define a class Item. This extracts data from each Roll and updates the price
    based on selected options.
*/

class Item extends React.Component {
    static contextType = CartContext; // CartContext is [cart, setCart]

    constructor(props) {
        super(props);
        this.state = {
            // These are default states:
            glazing: "Keep Original",
            glazingPrice: 0.00,
            packSize: 1,
            packMultiplier: 1.00,
            currentPrice: this.props.roll.price, 
            // glazingElement: this.#ItemOptions(this.props.roll)[0],
            // packSizeElement: this.#ItemOptions(this.props.roll)[1]
        };
        
        this.ItemOptions = this.#ItemOptions.bind(this);
        // https://reactjs.org/docs/handling-events.html

    }


    
    // Generate HTML components for glazing and pack size of each Roll
    // Private field
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
    #ItemOptions(eachRoll) {
        // Add dropdown options
        let glazingElement = null;
        let glazingOptionsElement = [];
        glazings.forEach(glazing => {
            glazingOptionsElement.push(
                <option value={glazing.value} 
                    key={glazing.option + "-" + eachRoll.elementID}
                    id={glazing.option + "-" + eachRoll.elementID}>{glazing.option}</option>
            );
        })
        glazingElement = (
            <select name="glazing" id={"glazing" + this.props.roll.elementID} onChange={this.glazingChange}>
                {glazingOptionsElement}
            </select>
        )
    
        
        // Add pack size radio buttons
        let packSizeElement = null;
        let packSizeOptionsElement = [];
        packSizes.forEach(packSize => {
            let isSelected = parseInt(packSize.option)==this.state.packSize
            let radioButtonStyle = {background: isSelected ? 'gray' : 'white',}
            // This is a demo for inline conditional styling 
            // (may be removed later since css can get it done as well;
            //  besides, pseudoclasses are not really supported)

            packSizeOptionsElement.push( 
                    <input type="radio" name="radio" 
                        key={eachRoll.elementID + "-" + packSize.option}
                        id={eachRoll.elementID + "-" + packSize.option} 
                        value={packSize.value} onChange={this.packSizeChange} />, // Don't forget the ","
                    <label className="radio-button-label" 
                        key={eachRoll.elementID + "-" + packSize.option + "-label"}
                        htmlFor={eachRoll.elementID + "-" + packSize.option}
                        style={radioButtonStyle}
                        >{packSize.option}</label>
            );
        })
        packSizeElement = (
            <div className="radio-group" id={"radio-group-" + this.props.roll.elementID}>
                {packSizeOptionsElement}
            </div>
        )
    
        return [glazingElement, packSizeElement];
    };


    glazingChange = (event) => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
        // Somehow bind() method doesn't work. Using arrow function instead.

        let selectedGlazingIndex = event.target.selectedIndex;
        let selectedGlazing = event.target[selectedGlazingIndex].text;
        let selectedGlazingPrice = parseFloat(event.target[selectedGlazingIndex].value)
        
        let priceOutput = 0;

        this.setState({
            glazing: selectedGlazing,
            glazingPrice: selectedGlazingPrice,
        }, () => {
           this.updatePrice();
        });
        // https://stackoverflow.com/questions/41446560/react-setstate-not-updating-state
        
    }
    
    packSizeChange = (event) => {
        let selectedPackSize = parseFloat(event.target.id.replace( /^\D+/g, ''));
        // https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript

        let selectedPackMultiplier = parseFloat(event.target.value);
        

        this.setState({
            packSize: selectedPackSize,
            packMultiplier: selectedPackMultiplier,
        }, () => {
        this.updatePrice();
        });
        // https://stackoverflow.com/questions/41446560/react-setstate-not-updating-state


    }

    updatePrice = () => {
        let priceOutput = (this.props.roll.price + this.state.glazingPrice) * this.state.packMultiplier;
        // console.log(priceOutput);
        this.setState({
            currentPrice: priceOutput.toFixed(2),
        });
    }

    addToCart = () => {
        const cart = this.context[0]
        const setCart = this.context[1]
        const setIsAddingToCart = this.context[3]
        const addedItem = {
            imgSrc: process.env.PUBLIC_URL + this.props.roll.imgSrc,
            name: this.props.roll.type, 
            glazing: this.state.glazing,
            packSize: this.state.packSize,
            price: this.state.currentPrice,
            inCartID: this.props.roll.elementID + "-" + Math.floor(Math.random() * 9999)
        }
        setCart(currentCart => [...currentCart, addedItem])
        setIsAddingToCart(true)
    }


    render() {
        return (
            <div className="grid-item" id={this.props.roll.elementID}>
                <img src={process.env.PUBLIC_URL + this.props.roll.imgSrc} alt={this.props.roll.type}/>
               
                
                <h5>{this.props.roll.type}</h5>
                <form id={this.props.roll.elementID + "-form"}>
                    <fieldset>

                        <label htmlFor={"glazing-" + this.props.roll.elementID}>Glazing:</label>
                        {/* {this.state.glazingElement} */}
                        {this.#ItemOptions(this.props.roll)[0]}

                        <label htmlFor={"radio-group-" + this.props.roll.elementID}>Pack size:</label>
                        {/* {this.state.packSizeElement} */}
                        {this.#ItemOptions(this.props.roll)[1]}

                        <div className="price" id={"price-" + this.props.roll.elementID}>${this.state.currentPrice}</div>
                        <input type="button" value="Add to Cart" onClick={() => (this.addToCart(this))} />
                    </fieldset>
                </form>
            </div>
        )
    }
}




function Grid(props) {
    const [listedRolls, setListedRolls] = useContext(ItemsContext)

    let gridContent = [];

    if (listedRolls.length == 0) {
        gridContent = <h2> No match! </h2>

    } else {
        listedRolls.forEach(eachRoll => { 
            // loop through all the listed Roll's (this can be sorted)
             
            // Insert Item
            gridContent.push(
                <Item roll={eachRoll} key={"item-"+eachRoll.elementID}/>
            );
        })
    }
    
    return (
        <div className="grid-container">
            {gridContent}
        </div>
    )

};


export default Grid