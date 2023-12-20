import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import styles from "./SearchBar.module.css";

function SearchBar() {
	const { handleSearchChange, searchInput } = useContext(SearchContext);

	return (
		<input
			className={styles.Input}
			type="text"
			placeholder="Search Project or Employee..."
			value={searchInput}
			onChange={handleSearchChange}
		/>
	);
}

export default SearchBar;
