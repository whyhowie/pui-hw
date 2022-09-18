import './App.css';
import Navbar from './Navbar';
import Grid from './GridItem';
import CartInfo from './CartBehavior'

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Grid></Grid>
        {/* 
            Note: Here I decided to create a Grid component with contents
            created by looping on a list of Roll objects (see GridItem.js
            and Products.js).
            
            I think this is more convenient than creating multiple Item
            components here and pass in props for each. In the end we will 
            probably need to read product information from some database. 
            
            Multiple YouTube tutorials used a similar method.
        */}
    </div>

    
  );
};

export default App;
