import { dateDifferenceInDays } from "./dateCalculations";

function formatToArrOfIndividuals(obj) {
	const arrayOfFinal = [];
	for (let key in obj) {
		for (let i = 0; i < obj[key].length; i++) {
			const arrayOfProject = [];

			arrayOfProject.push(key);
			arrayOfProject.push(obj[key][i][0]);
			arrayOfProject.push(dateDifferenceInDays(obj[key][i][2], obj[key][i][3]));
			arrayOfFinal.push(arrayOfProject);
		}
	}
	return arrayOfFinal;
}
export { formatToArrOfIndividuals };
