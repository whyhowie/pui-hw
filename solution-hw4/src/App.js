import './App.css';
import Navbar from './Navbar';
import Grid from './GridItem';
import { CartPopup } from './CartInfo'
import { CartProvider } from './CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar></Navbar>
        <Grid></Grid>
        {/* 
            Note: Here I decided to create a Grid component with Items
            created by looping on a list of Roll objects (see GridItem.js
            and Products.js).

            The use of state and props can be found in GridItem.js.
            
            I think this is more convenient than creating multiple Item
            components here and pass in props for each. In the end we will 
            probably need to read product information from some database. 
            
            Multiple YouTube tutorials used a similar method.
        */}
      </CartProvider>
    </div>

    
  );
};

export default App;
