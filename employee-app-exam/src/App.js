import "./App.css";
import DataVisualisePage from "./components/DataVisualisePage/DataVisualisePage";
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
