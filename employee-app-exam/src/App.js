import "./App.css";
import DataVisualisePage from "./Page/DataVisualisePage";
import { SearchProvider } from "./context/SearchContext";

function App() {
	return (
		<div className="App">
			<SearchProvider>
				<DataVisualisePage />
			</SearchProvider>
		</div>
	);
}

export default App;
