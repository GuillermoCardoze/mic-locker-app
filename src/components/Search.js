import React from "react";

function Search({ setSearch }) {


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Microphones:</label>
      <input 
        type="text"
        id="search"
        placeholder="Search Microphones..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;