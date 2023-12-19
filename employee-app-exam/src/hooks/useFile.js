import { useState } from "react";
import {
	formatArrIntoMatrix,
	groupArraysByProject,
	splitIntoArray,
} from "../utils/dataUtils";
import { individualTimerArr } from "../utils/individualTimeArr";
import { projectLongjevity } from "../utils/projectLongevity";
import workingTimeCalculations from "../utils/workingTimeCalculations";
import {
	filterEmptyStringInArr,
	incompleteFieldsArr,
	sanitizeMatrixFromIncompleteFields,
} from "../utils/validations";

function useFile() {
	const [projectTime, setProjcetTime] = useState([]);
	const [arrPairs, setArrPairs] = useState([]);
	const [individual, setIndividual] = useState([]);
	const [errors, setErrors] = useState([]);
	// const [temp, setTemo] = useState({});

	function handleFileUpload(e) {
		e.preventDefault();
		const file = e.target.files[0];
		const reader = new FileReader();

		if (file) {
			reader.readAsText(file);

			reader.onload = function () {
				const dataArray = splitIntoArray(reader.result);
				const emptyDataFilter = filterEmptyStringInArr(dataArray);
				const dataMatrix = formatArrIntoMatrix(emptyDataFilter);

				const errors = incompleteFieldsArr(dataMatrix);

				const sanitizedMatrix = sanitizeMatrixFromIncompleteFields(dataMatrix);

				const grouped = groupArraysByProject(sanitizedMatrix);

				const arrayOfPairs = workingTimeCalculations(grouped);
				const arrayOfProjectTime = projectLongjevity(grouped);
				const individual = individualTimerArr(grouped);

				// setTemo(sanitizedMatrix);

				setErrors(errors);
				setProjcetTime(arrayOfProjectTime);
				setArrPairs(arrayOfPairs);
				setIndividual(individual);
			};
		}
	}

	return {
		projectTime,
		arrPairs,
		individual,
		errors,

		handleFileUpload,
	};
}

export default useFile;
