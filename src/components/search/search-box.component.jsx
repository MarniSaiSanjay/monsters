import React from 'react'
import './search-box.style.css'

export const SearchBox = ({placeholder, handleChange}) => ( // we can also directly pass props(as in card-list component), or destructure it as here
    <input
        className='search' type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
)


// we don't change the state here itself, as if we change the state here only, then we can't take the 
// state change to card-list component. So we level up the state change.
