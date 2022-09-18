import { Rolls, glazings, packSizes } from './Products'
import './Grid.css'
import { addToCart, glazingChange } from './CartBehavior'

function Grid() {
    let gridContent = [];
    Rolls.forEach(eachRoll => { // loop on all the Roll's
        
        // Add dropdown options
        let glazingElement = [];
        glazings.forEach(glazing => {
            glazingElement.push(
                <option value={glazing.value} id={"glazing-" + eachRoll.elementID}>{glazing.option}</option>
            );
        })

        // Add pack size radio buttons
        let packSizeElement = [];
        packSizes.forEach(packSize => {
            packSizeElement.push( 
                    <input type="radio" name="radio" id={eachRoll.elementID + "-" + packSize.value} 
                        value={packSize.value} onclick="packSizeChange(this)" />, // Don't forget the ","
                    <label class="radio-button-label" for={eachRoll.elementID + "-" + packSize.value}>{packSize.value}</label>
            );

        })

        gridContent.push(
            <div className="grid-item" id={eachRoll.elementID}>
                <img src={eachRoll.imgSrc} alt={eachRoll.type}/>
                {/* <img src={require('../assets/products/original-cinnamon-roll.jpg')} alt={eachRoll.type}/> */}
                
                <h5>{eachRoll.type}</h5>
                <form id={eachRoll.elementID + "-form"}>
                    <fieldset>

                        <label for={"glazing-" + eachRoll.elementID}>Glazing:</label>
                        <select name="glazing" id={"glazing" + eachRoll.elementID} onchange={glazingChange(this)}>
                            {glazingElement}
                        </select>

                        <label>Pack size:</label>
                        <div className="radio-group" id={"radio-group-" + eachRoll.elementID}>
                            {packSizeElement}
                        </div>

                        <div className="price" id={"price-" + eachRoll.elementID}>${eachRoll.price}</div>
                        <input type="button" value="Add to Cart" onclick={addToCart(eachRoll.elementID)} />
                    </fieldset>
                </form>
            </div>
        );
        
    })

    return (
        <div className="grid-container">
            {gridContent}
        </div>
    )


};


export default Grid