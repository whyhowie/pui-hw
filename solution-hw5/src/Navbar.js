import './App.css';
import './Navbar.css';
import './index.css'
import { CartInfo, CartView } from './CartInfo'
import React from 'react';

class Navbar extends React.Component {

    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <div className="header-container">
                        <div className="header-left">
                        <img className="logo" src={process.env.PUBLIC_URL + "/assets/logo/logo-01.svg"} alt="Bun Bun bake shop logo" />
                        {/* use process.env.PUBLIC_URL */}
                        </div>
                        <div className="header-right">
                        <nav>
                            <ul>
                            <li><a href="#/" className="active">PRODUCTS</a></li> 
                            <li>
                                <a href="#/" className="inactive" onClick={this.props.cartViewToggle}>CART</a>
                                <br/>
    
                                <CartInfo />
                    
                            </li>
                            </ul>
                            <hr/>
                        </nav>
                        <h2>
                            Our hand-made cinnamon rolls
                        </h2>
                        </div>
                    </div>
                    
                </header>
    
            </React.Fragment>
        );
    }
    
}
  
export default Navbar;