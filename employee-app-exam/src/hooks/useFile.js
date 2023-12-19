import { useState } from "react";
import {
	formatArrIntoMatrix,
	groupArraysByProject,
	splitIntoArray,
} from "../utils/dataUtils";
import { individualTimerArr } from "../utils/individualTimeArr";
import { projectLongjevity } from "../utils/projectLongevity";
import workingTimeCalculations from "../utils/workingTimeCalculations";

function useFile() {
	const [projectTime, setProjcetTime] = useState([]);
	const [arrPairs, setArrPairs] = useState([]);
	const [individual, setIndividual] = useState([]);

	function handleFileUpload(e) {
		e.preventDefault();
		const file = e.target.files[0];
		const reader = new FileReader();

		const errors = [];

		if (file) {
			reader.readAsText(file);

			reader.onload = function () {
				const dataArray = splitIntoArray(reader.result);
				const emptyDataFilter = dataArray.filter((row) => {
					return row.length > 1;
				});
				const dataMatrix = formatArrIntoMatrix(emptyDataFilter);

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

				const arrayOfPairs = workingTimeCalculations(grouped);
				const arrayOfProjectTime = projectLongjevity(grouped);
				const individual = individualTimerArr(grouped);

				setProjcetTime(arrayOfProjectTime);
				setArrPairs(arrayOfPairs);
				setIndividual(individual);
			};
		}
	}

	return { projectTime, arrPairs, individual, handleFileUpload };
}

export default useFile;