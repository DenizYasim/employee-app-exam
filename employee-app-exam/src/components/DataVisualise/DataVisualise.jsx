import React, { useState } from "react";
import {
	formatArrIntoMatrix,
	groupArraysByProject,
	splitIntoArray,
} from "../../utils/dataUtils";
import FileUploadInput from "../FileUpload/FileUploadInput";
import DataTable from "../DataTable/DataTable";
import { dateDifferenceInDays } from "../../utils/dateDifferenceInDays";

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
					});
				}

				const grouped = groupArraysByProject(dataMatrix);

				setData(grouped);

				console.log(grouped);

				for (let key in grouped) {
					const dateWorkedTogether = [];
					const employeesWorkingTogether = [];
					let earliestDate = Number.MAX_SAFE_INTEGER;
					let latestDate = 0;

					if (grouped[key].length > 1) {
						for (let i = 0; i < grouped[key].length; i++) {
							for (let j = i + 1; j < grouped[key].length; j++) {
								console.log(grouped[key][i][2]);
								console.log(grouped[key][j][2]);
							}
						}
					}

					grouped[key].forEach((value) => {
						if (value[2] < earliestDate) {
							earliestDate = value[2];
							dateWorkedTogether[0] = earliestDate;
						}

						if (value[3] > latestDate) {
							latestDate = value[3];
							dateWorkedTogether[1] = latestDate;
						}
						// console.log(value[2]);
						// console.log(dateDifferenceInDays(value[2], value[3]));
					});
					console.log(
						dateDifferenceInDays(dateWorkedTogether[0], dateWorkedTogether[1])
					);
				}
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
