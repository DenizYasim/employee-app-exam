import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

function Searchbar() {
	const { handleSearchChange, searchSubmit } = useContext(SearchContext);

	return (
		<input
			type="text"
			placeholder="Search..."
			value={searchSubmit}
			onChange={handleSearchChange}
		/>
	);
}

export default Searchbar;
