import './App.css';
import './Navbar.css';
import './index.css'

function Navbar() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                <img className="logo" src={"./assets/logo/logo-01.svg"} alt="Bun Bun bake shop logo" />
                </div>
                <div className="header-right">
                <nav>
                    <ul>
                    <li><a href="#" className="active">PRODUCTS</a></li> 
                    <li>
                        <a href="#" className="inactive">CART</a>
                        <br/>

                        <div className="cart-info">
                            {/* To be completed */}
                        </div>

                        <div className="cart-popup">
                            {/* To be completed */}
                        </div>                
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