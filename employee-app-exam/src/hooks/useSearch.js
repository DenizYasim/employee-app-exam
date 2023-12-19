import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";

function useSearch(TableArr) {
	const { searchSubmit } = useContext(SearchContext);
	const [filteredData, setFilteredData] = useState(TableArr);

	useEffect(() => {
		setFilteredData(TableArr);
	}, [TableArr]);

	useEffect(() => {
		if (!searchSubmit) {
			setFilteredData(TableArr);
		} else {
			const filtered = [];

			for (let i = 0; i < TableArr.length; i++) {
				for (let j = 0; j < TableArr[i].length - 1; j++) {
					if (TableArr[i][j] === searchSubmit) {
						filtered.push(TableArr[i]);
					}
				}
			}
			setFilteredData(filtered);
		}
	}, [searchSubmit]);
	return {
		filteredData,
	};
}

export default useSearch;