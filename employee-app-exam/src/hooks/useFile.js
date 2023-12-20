import { useState } from "react";
import { groupArraysByProject, splitIntoMatrix } from "../utils/dataUtils";
import { formatToArrOfIndividuals } from "../utils/formatToArrOfIndividuals";
import { formatToArrOfProjects } from "../utils/formatToArrOfProjects";
import formatToArrOfPairs from "../utils/formatToArrOfPairs";
import {
	incompleteFieldsArr,
	sanitizeMatrixFromIncompleteFields,
} from "../utils/validations";
import formatToArrOfCommon from "../utils/formatToArrOfCommon";

function useFile() {
	const [projectsArr, setProjcetsArr] = useState([]);
	const [arrPairs, setArrPairs] = useState([]);
	const [individualsArr, setIndividualsArr] = useState([]);
	const [commonArr, setCommonsArr] = useState([]);
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
				const arrayOfCommon = formatToArrOfCommon(grouped);

				// setTemo(sanitizedMatrix);

				setCommonsArr(arrayOfCommon);

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
		commonArr,
	};
}

export default useFile;
