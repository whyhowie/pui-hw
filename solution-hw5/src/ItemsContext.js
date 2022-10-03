import React, { createContext, useState } from 'react';
import { rolls } from './Products';

// Based on: https://www.youtube.com/watch?v=hhAT0CJDWqM

export const ItemsContext = createContext()

export const ItemsProvider = (props) => {
    const [listedRolls, setListedRolls] = useState(rolls);

    // This declares a state variable cart and a function setCart that updates it
    // https://reactjs.org/docs/hooks-state.html
    return (
        <ItemsContext.Provider value={[listedRolls, setListedRolls]}>
            {props.children}
        </ItemsContext.Provider>
    )
}