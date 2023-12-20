import FileUploadInput from "../components/FileUpload/FileUploadInput";
import styles from "./DataVisualise.module.css";
import DataTableTemplate from "../components/DataTables/DataTableTemplate";
import useFile from "../hooks/useFile";
import ErrorsButton from "../components/ErrorsButton/ErrorsButton";
import SearchBar from "../components/SearchBar/Searchbar";

function DataVisualisePage() {
	const { projectsArr, arrPairs, individualsArr, errors, handleFileUpload } =
		useFile();

	return (
		<div className={styles.container}>
			<FileUploadInput changeHandler={handleFileUpload} />
			{!!errors.length && <ErrorsButton errors={errors} />}
			{!!projectsArr.length && <SearchBar />}
			<DataTableTemplate
				data={projectsArr}
				title={"Common Project Participants"}
				firstTh={"Project ID"}
				secondTh={"Participating Employee IDs"}
				thirdTh={"Project Longevity(days)"}
			/>
			<DataTableTemplate
				data={individualsArr}
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
