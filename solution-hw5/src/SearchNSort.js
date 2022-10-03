import { useContext, useRef } from 'react';
import { ItemsContext } from './ItemsContext'
import { rolls } from './Products'
import './SearchNSort.css'

// https://www.youtube.com/watch?v=x7niho285qs



function SearchBox() {
    const [listedRolls, setListedRolls] = useContext(ItemsContext)
    const searchRef = useRef(null)

    const placeholder = "Search for your favorite roll!"

    const handleSearch = () => {
        const searchTerm = searchRef.current.value
        const allRolls = rolls
        // Make sure we start from the original list when searching!

        // setListedRolls(
        //     listedRolls.filter( eachListedRoll => {
        //         eachListedRoll.type.toLowerCase().includes(searchRef.current.value.toLowerCase())
        //     })
        // )
        setListedRolls(allRolls.filter( eachListedRoll => {
                return eachListedRoll.type.toLowerCase().includes(searchTerm.toLowerCase())
            })
        )
}

    return (
        <div className="search">
            <div className="search-inputs">
                <input type="text" 
                    ref={searchRef}
                    placeholder={placeholder}
                    // name="search-input-box"
                    // onChange={handleSearch}
                    />
                <button type="button" onClick={handleSearch} className="search-button"> Search </button>
            </div>
        
        </div>
    )
    
}


function SortMenu() {
    const [listedRolls, setListedRolls] = useContext(ItemsContext)
    const sortRef = useRef(null)


    const sortOptions = ["Name", "Base Price"]
    let sortOptionsElement = []

    sortOptions.forEach( sortOption => {
        sortOptionsElement.push(
            <option className='sort-option' 
                value={sortOption.toLowerCase().replace(" ","-")} 
                key={sortOption.toLowerCase().replace(" ","-")}
                id={sortOption.toLowerCase().replace(" ","-")}>{sortOption}</option>
        );
    })


    const handleSort = () => {
        let selectedSortIndex = sortRef.current.selectedIndex;
        let selectedSort = sortRef.current.value;

        // Note: .sort() is mutation. It does not actually change the array.
        //  using it straight on the original state won't trigger rerender.


        switch (selectedSort) {
            case 'name':
                setListedRolls([...listedRolls].sort((a,b) => {
                    // here we have to make a copy before sorting
                    return a.type.localeCompare(b.type)
                }))
                // https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
                break;

            case 'base-price':
                setListedRolls([...listedRolls].sort((a,b) => {
                    return a.price - b.price
                }))
                break;

        }


    }

    return (
        <div className='sort-by'>
            <p>Sort by: </p>
            <select className='sort-select' 
                name="sort-select" 
                ref={sortRef}
                onChange={handleSort}
                defaultValue="none">

                    <option value="none" disabled hidden>--</option>
                    {sortOptionsElement}
            </select>
        </div>
        
            
    )

}


function SearchNSort() {
    return (
        <div className='search-n-sort'>
            <SearchBox></SearchBox>
            <SortMenu></SortMenu>
        </div>
    )
}

export {SearchBox, SortMenu, SearchNSort}

