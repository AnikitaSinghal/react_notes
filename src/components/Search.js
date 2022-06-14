import React from "react";
import { MdSearch } from "react-icons/md";
function Search(handleSearch) {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.4em" />
      <input
        type="text"
        placeholder="Search for your notes..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
export default Search;
