import React, { useState } from "react";
import {
	formatArrIntoMatrix,
	groupArraysByProject,
	splitIntoArray,
} from "../../utils/dataUtils";
import FileUploadInput from "../FileUpload/FileUploadInput";
import DataTable from "../DataTable/DataTable";
import {
	calculateDaysTogether,
	dateDifferenceInDays,
} from "../../utils/dateDifferenceInDays";
import workingTimeCalculations from "../../utils/workingTimeCalculations";

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

				const arrayOfPairsInsert = [];

				for (let key in grouped) {
					const dateWorkedTogether = [];

					let earliestDate = Number.MAX_SAFE_INTEGER;
					let latestDate = 0;

					let generator = workingTimeCalculations(grouped, key);
					if (grouped[key].length > 0) {
						for (const value of generator) {
							arrayOfPairsInsert.push(value);
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
						// console.log(dateDifferenceInDays(value[2], value[3]));
					});
					console.log(
						dateDifferenceInDays(dateWorkedTogether[0], dateWorkedTogether[1])
					);
				}
				// const arrayOfPairs = arrayOfPairsInsert.filter((item) => {
				// 	return item.length > 1;
				// });
				console.log(arrayOfPairsInsert);
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
