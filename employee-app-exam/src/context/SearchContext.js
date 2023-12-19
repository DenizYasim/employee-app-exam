import { createContext, useState } from "react";
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
	const [searchSubmit, setSearchSubmit] = useState("");

	const handleSearchChange = (e) => {
		e.preventDefault();
		setSearchSubmit(e.target.value.trim());
	};

	return (
		<SearchContext.Provider value={{ handleSearchChange, searchSubmit }}>
			{children}
		</SearchContext.Provider>
	);
};
