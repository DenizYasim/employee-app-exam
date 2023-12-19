import FileUploadInput from "../FileUpload/FileUploadInput";
import DataTableForSlice from "../DataTables/DataTableForSlice";
import styles from "./DataVisualise.module.css";
import DataTableTemplate from "../DataTables/DataTableTemplate";
import useFile from "../../hooks/useFile";
import ErrorsButton from "../ErrorsButton/ErrorsButton";
import Searchbar from "../SearchBar/Searchbar";

function DataVisualisePage() {
	const { projectTime, arrPairs, individual, errors, handleFileUpload } =
		useFile();

	return (
		<div className={styles.container}>
			<FileUploadInput changeHandler={handleFileUpload} />
			<ErrorsButton errors={errors} />
			<Searchbar />
			<DataTableForSlice
				arangedArr={projectTime}
				firstTh={"Project ID"}
				secondTh={"Participating Employees"}
				thirdTh={"Project Longevity(days)"}
			/>
			<DataTableTemplate
				arrOfInfo={individual}
				firstTh={"Project ID"}
				secondTh={"Employee IDs"}
				thirdTh={"Days Worked on Project"}
			/>
			<DataTableTemplate
				arrOfInfo={arrPairs}
				firstTh={"Employee ID"}
				secondTh={"Employee ID"}
				thirdTh={"Overlaping Work Days"}
			/>
		</div>
	);
}

export default DataVisualisePage;
