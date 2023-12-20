import { createContext, useState } from "react";
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
	const [searchInput, setSearchInput] = useState("");

	const handleSearchChange = (e) => {
		e.preventDefault();
		//This trim should be bound to a submit handleFunction and not a onChange
		setSearchInput(e.target.value.trim());
	};

	return (
		<SearchContext.Provider value={{ handleSearchChange, searchInput }}>
			{children}
		</SearchContext.Provider>
	);
};
