import './App.css';
import './Navbar.css';
import './index.css'
import { CartInfo, CartPopup } from './CartInfo'

function Navbar() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                <img className="logo" src={process.env.PUBLIC_URL + "/assets/logo/logo-01.svg"} alt="Bun Bun bake shop logo" />
                {/* use process.env.PUBLIC_URL */}
                </div>
                <div className="header-right">
                <nav>
                    <ul>
                    <li><a href="#" className="active">PRODUCTS</a></li> 
                    <li>
                        <a href="#" className="inactive">CART</a>
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
    );
}
  
export default Navbar;