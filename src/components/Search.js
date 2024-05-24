import React from "react";

function Search() {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Microphones:</label>
      <input
        type="text"
        id="search"
        placeholder="Search Microphones..."
        onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;