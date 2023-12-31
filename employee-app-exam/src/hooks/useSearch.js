import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";

function useSearch(TableArr) {
	const { searchInput } = useContext(SearchContext);
	const [filteredData, setFilteredData] = useState(TableArr);

	useEffect(() => {
		setFilteredData(TableArr);
	}, [TableArr]);

	useEffect(() => {
		const noResults = [["No Results", "No Results", "-"]];
		if (!searchInput) {
			setFilteredData(TableArr);
		} else {
			const filtered = [];

			for (let i = 0; i < TableArr.length; i++) {
				for (let j = 0; j < TableArr[i].length - 1; j++) {
					if (TableArr[i][j] === searchInput) {
						filtered.push(TableArr[i]);
					}
				}
			}
			filtered.length ? setFilteredData(filtered) : setFilteredData(noResults);
		}
	}, [searchInput, TableArr]);
	return {
		filteredData,
	};
}

export default useSearch;
