import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

function Searchbar() {
	const { handleSearchChange, searchInput } = useContext(SearchContext);

	return (
		<form>
			<input
				type="text"
				placeholder="Search..."
				value={searchInput}
				onChange={handleSearchChange}
			/>
		</form>
	);
}

export default Searchbar;
