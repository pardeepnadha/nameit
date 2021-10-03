import React from "react";
import './SearchBox.css';

const SearchBox = ({ onInputchnage }) => {
    return (
        <div className="search-container">
            <input type="text" onChange={(event) => onInputchnage(event.target.value)}
                placeholder="Type Keywords" className="search-input" />
        </div>
    )
}

export default SearchBox;