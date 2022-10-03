import './App.css';
import Navbar from './Navbar';
import Grid from './GridItems';
import { CartView } from './CartInfo'
import { CartProvider } from './CartContext';
import { ItemsContext, ItemsProvider } from './ItemsContext';
import { SearchNSort } from './SearchNSort';
import { Rolls, glazings, packSizes } from './Products'
import React, { useContext } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCartViewExpanded: false,
  };
  }
  

  toggleCartView = () => {
    this.setState({isCartViewExpanded: !this.state.isCartViewExpanded})
    // console.log(this.state.isCartViewExpanded)
  }

  render() {


    return (
      <div className="App">
        <ItemsProvider>
          {/* This provider shares listed items (searched and sorted) */}
          <CartProvider>
            {/* To share the cart information among components, I used 
                context following this tutorial: 
                https://www.youtube.com/watch?v=hhAT0CJDWqM */}
            <Navbar cartViewToggle={this.toggleCartView}></Navbar>
            {this.state.isCartViewExpanded && <CartView></CartView>}
            <SearchNSort></SearchNSort>
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
        </ItemsProvider>
      </div>
        
    );
  }
    
};

export default App;
