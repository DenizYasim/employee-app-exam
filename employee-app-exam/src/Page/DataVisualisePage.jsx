import FileUploadInput from "../components/FileUpload/FileUploadInput";
import styles from "./DataVisualise.module.css";
import DataTableTemplate from "../components/DataTables/DataTableTemplate";
import useFile from "../hooks/useFile";
import ErrorsButton from "../components/ErrorsButton/ErrorsButton";
import Searchbar from "../components/SearchBar/Searchbar";

function DataVisualisePage() {
	const { projectTime, arrPairs, individual, errors, handleFileUpload } =
		useFile();

	return (
		<div className={styles.container}>
			<FileUploadInput changeHandler={handleFileUpload} />
			{!!errors.length && <ErrorsButton errors={errors} />}
			<Searchbar />
			<DataTableTemplate
				data={projectTime}
				firstTh={"Project ID"}
				secondTh={"Participating Employee IDs"}
				thirdTh={"Project Longevity(days)"}
			/>
			<DataTableTemplate
				data={individual}
				firstTh={"Project ID"}
				secondTh={"Employee IDs"}
				thirdTh={"Days Worked on Project"}
			/>
			<DataTableTemplate
				data={arrPairs}
				firstTh={"Employee ID"}
				secondTh={"Employee ID"}
				thirdTh={"Overlaping Work Days"}
			/>
		</div>
	);
}

export default DataVisualisePage;
