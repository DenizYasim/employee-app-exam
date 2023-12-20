import { convertDateIntoUtc } from "./dateCalculations";

function splitIntoMatrix(string) {
	const matrix = string
		.split("\r\n")
		//filters out empty rows or ones with just a space
		.filter((row) => row.trim().length !== 0)
		//maps into matrix by splitting by commas
		.map((row) => row.split(",").map((cell) => cell.trim()));

	return matrix;
}

function groupArraysByProject(data) {
	let groupedArrays = {};

	for (let array of data) {
		let id = array[1];
		//I dont know where else to put this validation for NaN
		if (!!array[3] && !!array[2]) {
			array[2] = convertDateIntoUtc(array[2]);
			array[3] = convertDateIntoUtc(array[3]);

			if (groupedArrays[id]) {
				groupedArrays[id].push(array);
			} else {
				groupedArrays[id] = [array];
			}
		}
	}

	return groupedArrays;
}

export { splitIntoMatrix, groupArraysByProject };
