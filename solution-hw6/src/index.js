import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { CartProvider } from './CartContext';
import { ItemsProvider } from './ItemsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ItemsProvider>
    {/* This provider shares listed items (searched and sorted) */}
    <CartProvider>
      {/* To share the cart information among components, I used 
          context following this tutorial: 
          https://www.youtube.com/watch?v=hhAT0CJDWqM */}
      <App />
    </CartProvider>
  </ItemsProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
