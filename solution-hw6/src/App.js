import './App.css';
import Navbar from './Navbar';
import Grid from './GridItems';
import { CartView } from './CartInfo'
import { SearchNSort } from './SearchNSort';
import React, { useContext } from 'react';

import { CartContext } from './CartContext'

class App extends React.Component {
  static contextType = CartContext; // CartContext is [cart, setCart]

  constructor(props) {
    super(props)
    this.state = {
      isCartViewExpanded: false,
  };
  }
  

  componentDidMount() {
    // called when the component is first mounted
    localStorage.setItem("cart", JSON.stringify(this.context[0]));
    console.log(JSON.parse(localStorage.getItem("cart")) || [])
  }

  componentDidUpdate() {
    // called when there are updates in the component e.g., state changes
    localStorage.setItem("cart", JSON.stringify(this.context[0]));
    console.log(JSON.parse(localStorage.getItem("cart")) || [])
  }



  toggleCartView = () => {
    this.setState({isCartViewExpanded: !this.state.isCartViewExpanded})
    // console.log(this.state.isCartViewExpanded)
  }

  render() {


    return (
      <div className="App">
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
      </div>
        
    );
  }
    
};

export default App;
