import { createContext, useState } from "react";
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
	const [searchInput, setSearchInput] = useState("");
	const [searchSubmit, setSearchSubmit] = useState("");
	const handleSearchChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
		setSearchSubmit(e.target.value);
		console.log(searchSubmit);

		console.log(searchInput);
	};
	const handleSearchSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<SearchContext.Provider
			value={{
				handleSearchSubmit,
				handleSearchChange,
				searchInput,
				searchSubmit,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
};
