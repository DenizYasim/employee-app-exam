import { useState } from "react";
import { groupArraysByProject, splitIntoMatrix } from "../utils/dataUtils";
import { formatToArrOfIndividuals } from "../utils/formatToArrOfIndividuals";
import { formatToArrOfProjects } from "../utils/formatToArrOfProjects";
import formatToArrOfPairs from "../utils/formatToArrOfPairs";
import {
	incompleteFieldsArr,
	sanitizeMatrixFromIncompleteFields,
} from "../utils/validations";

function useFile() {
	const [projectsArr, setProjcetsArr] = useState([]);
	const [arrPairs, setArrPairs] = useState([]);
	const [individualsArr, setIndividualsArr] = useState([]);
	const [errors, setErrors] = useState([]);
	// const [temp, setTemo] = useState({});

	function handleFileUpload(e) {
		e.preventDefault();
		const file = e.target.files[0];
		const reader = new FileReader();

		if (file) {
			reader.readAsText(file);

			reader.onload = function () {
				const dataMatrix = splitIntoMatrix(reader.result);

				const errors = incompleteFieldsArr(dataMatrix);

				const sanitizedMatrix = sanitizeMatrixFromIncompleteFields(dataMatrix);

				const grouped = groupArraysByProject(sanitizedMatrix);

				const arrayOfPairs = formatToArrOfPairs(grouped);
				const arrayOfProjectTime = formatToArrOfProjects(grouped);
				const individuals = formatToArrOfIndividuals(grouped);

				// setTemo(sanitizedMatrix);

				setErrors(errors);
				setProjcetsArr(arrayOfProjectTime);
				setArrPairs(arrayOfPairs);
				setIndividualsArr(individuals);
			};
		}
	}

	return {
		projectsArr,
		arrPairs,
		individualsArr,
		errors,
		handleFileUpload,
	};
}

export default useFile;
