import React, { useContext, useState } from 'react'
import { Rolls, glazings, packSizes } from './Products'
import './GridItem.css'
import { CartContext } from './CartContext'


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
            packSize: 1.00,
            currentPrice: this.props.Roll.price, 
            glazingElement: this.#ItemOptions(this.props.Roll)[0],
            packSizeElement: this.#ItemOptions(this.props.Roll)[1]
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
            <select name="glazing" id={"glazing" + this.props.Roll.elementID} onChange={this.glazingChange}>
                {glazingOptionsElement}
            </select>
        )
    
        // Add pack size radio buttons
        let packSizeElement = null;
        let packSizeOptionsElement = [];
        packSizes.forEach(packSize => {
            packSizeOptionsElement.push( 
                    <input type="radio" name="radio" 
                        key={eachRoll.elementID + "-" + packSize.value}
                        id={eachRoll.elementID + "-" + packSize.value} 
                        value={packSize.value} onChange={this.packSizeChange} />, // Don't forget the ","
                    <label className="radio-button-label" 
                        key={eachRoll.elementID + "-" + packSize.value + "-label"}
                        htmlFor={eachRoll.elementID + "-" + packSize.value}>{packSize.value}</label>
            );
        })
        packSizeElement = (
            <div className="radio-group" id={"radio-group-" + this.props.Roll.elementID}>
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
        let selectedPackSize = parseFloat(event.target.value);
        
        this.setState({
            packSize: selectedPackSize,
        }, () => {
        this.updatePrice();
        });
        // https://stackoverflow.com/questions/41446560/react-setstate-not-updating-state


    }

    updatePrice = () => {
        let priceOutput = (this.props.Roll.price + this.state.glazingPrice) * this.state.packSize;
        // console.log(priceOutput);
        this.setState({
            currentPrice: priceOutput.toFixed(2),
        });
    }

    addToCart = () => {
        const setCart = this.context[1]
        const addedItem = {
            name: this.props.Roll.type, 
            glazing: this.state.glazing,
            packSize: this.state.packSize,
            price: this.state.currentPrice
        }
        setCart(currentCart => [...currentCart, addedItem])
    }


    render() {
        return (
            <div className="grid-item" id={this.props.Roll.elementID}>
                <img src={process.env.PUBLIC_URL + this.props.Roll.imgSrc} alt={this.props.Roll.type}/>
               
                
                <h5>{this.props.Roll.type}</h5>
                <form id={this.props.Roll.elementID + "-form"}>
                    <fieldset>

                        <label htmlFor={"glazing-" + this.props.Roll.elementID}>Glazing:</label>
                        {this.state.glazingElement}

                        <label htmlFor={"radio-group-" + this.props.Roll.elementID}>Pack size:</label>
                        {this.state.packSizeElement}

                        <div className="price" id={"price-" + this.props.Roll.elementID}>${this.state.currentPrice}</div>
                        <input type="button" value="Add to Cart" onClick={() => (this.addToCart(this))} />
                    </fieldset>
                </form>
            </div>
        )
    }
}




function Grid() {
    let gridContent = [];
    Rolls.forEach(eachRoll => { // loop on all the Item's
         
        // Insert Item
        gridContent.push(
            <Item Roll={eachRoll} key={"item-"+eachRoll.elementID}/>
        );
        
    })

    return (
        <div className="grid-container">
            {gridContent}
        </div>
    )

};



export default Grid