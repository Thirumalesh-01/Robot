import React from "react";
import './SearchBox.css'

const SearchBox = ({ onsearcher }) => {
  return (
    <div className="tc pa2 br4 mr3 ">
      <input
        className="button"
        type="search"
        placeholder="searchrobot!"
        onChange={onsearcher}
      />
    </div>
  );
};

export default SearchBox;
