import React from 'react';
import "./SearchBox.css";

const SearchBox = ({placeholder, handleChange}) => {
    return(
        <input 
          type='text'
          className="search"
          placeholder={placeholder} 
          onChange={handleChange} />
    );
}
export default SearchBox;