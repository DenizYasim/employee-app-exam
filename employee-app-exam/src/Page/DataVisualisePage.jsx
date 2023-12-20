import FileUploadInput from "../components/FileUpload/FileUploadInput";
import styles from "./DataVisualise.module.css";
import DataTableTemplate from "../components/DataTables/DataTableTemplate";
import useFile from "../hooks/useFile";
import ErrorsButton from "../components/ErrorsButton/ErrorsButton";
import SearchBar from "../components/SearchBar/Searchbar";

function DataVisualisePage() {
	const {
		projectsArr,
		arrPairs,
		individualsArr,
		errors,
		commonArr,
		handleFileUpload,
	} = useFile();

	return (
		<div className={styles.container}>
			<FileUploadInput changeHandler={handleFileUpload} />
			{!!errors.length && <ErrorsButton errors={errors} />}
			{!!individualsArr.length && <SearchBar />}
			<DataTableTemplate
				data={commonArr}
				title={"Pairs With Most Cumualative Days in Common Projects"}
				firstTh={"Employee IDs"}
				secondTh={"Employee IDs"}
				thirdTh={"Cumulative Days Worked"}
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
			<DataTableTemplate
				data={projectsArr}
				title={"Projects Participants"}
				firstTh={"Project ID"}
				secondTh={"Employee IDs"}
				thirdTh={"Project Longevity(days)"}
			/>
		</div>
	);
}

export default DataVisualisePage;
