import FileUploadInput from "../components/FileUpload/FileUploadInput";
import styles from "./DataVisualise.module.css";
import DataTableTemplate from "../components/DataTables/DataTableTemplate";
import useFile from "../hooks/useFile";
import ErrorsButton from "../components/ErrorsButton/ErrorsButton";
import SearchBar from "../components/SearchBar/Searchbar";

function DataVisualisePage() {
	const { projectTime, arrPairs, individual, errors, handleFileUpload } =
		useFile();

	return (
		<div className={styles.container}>
			<FileUploadInput changeHandler={handleFileUpload} />
			{!!errors.length && <ErrorsButton errors={errors} />}
			{!!projectTime.length && <SearchBar />}
			<DataTableTemplate
				data={projectTime}
				title={"Common Project Participants"}
				firstTh={"Project ID"}
				secondTh={"Participating Employee IDs"}
				thirdTh={"Project Longevity(days)"}
			/>
			<DataTableTemplate
				data={individual}
				title={"Individual Time Worked on Projects"}
				firstTh={"Project ID"}
				secondTh={"Employee IDs"}
				thirdTh={"Days Worked on Project"}
			/>
			<DataTableTemplate
				data={arrPairs}
				title={"Pairs With Overlapping Workdays"}
				firstTh={"Employee ID"}
				secondTh={"Employee ID"}
				thirdTh={"Overlaping Work Days"}
			/>
		</div>
	);
}

export default DataVisualisePage;
