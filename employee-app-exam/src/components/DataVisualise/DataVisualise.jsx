import React, { useState } from "react";
import {
	formatArrIntoMatrix,
	groupArraysByProject,
	splitIntoArray,
} from "../../utils/dataUtils";
import FileUploadInput from "../FileUpload/FileUploadInput";
import DataTable from "../DataTable/DataTable";
import workingTimeCalculations from "../../utils/workingTimeCalculations";
import { projectLongjevity } from "../../utils/projectLongevity";

function DataVisualise() {
	const [data, setData] = useState({});

	function handleFileUpload(e) {
		e.preventDefault();
		const file = e.target.files[0];
		const reader = new FileReader();

		const errors = [];

		if (file) {
			reader.readAsText(file);

			reader.onload = function () {
				const dataArray = splitIntoArray(reader.result);
				const dataMatrix = formatArrIntoMatrix(dataArray);

				//Catches if a row doesn't have all fields
				dataMatrix.forEach((row, index) => {
					if (row.length !== 4) {
						errors.push(index + 1);
					}
				});

				if (errors.length) {
					errors.forEach((error) => {
						console.log(`data on row ${error} is missing a value`);
						dataMatrix.splice(error - 1, 1);
					});
				}
				const grouped = groupArraysByProject(dataMatrix);
				setData(grouped);
				console.log(grouped);
				const arrayOfPairs = workingTimeCalculations(grouped);
				projectLongjevity(grouped);

				console.log(arrayOfPairs);
			};
		}
	}

	return (
		<div>
			<FileUploadInput changeHandler={handleFileUpload} />
			<DataTable data={data} />
		</div>
	);
}

export default DataVisualise;
