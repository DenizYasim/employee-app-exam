import { convertDateIntoUtc } from "./dateCalculations";

function splitIntoArray(string) {
	return string.split("\r\n");
}

function formatArrIntoMatrix(array) {
	return (
		array
			//filters out empty rows or ones with just a space
			.filter((row) => row.trim().lenght !== 1)

			.map((row) => row.split(",").map((cell) => cell.trim()))
	);
}

function groupArraysByProject(data) {
	let groupedArrays = {};

	for (let array of data) {
		let id = array[1];
		//I dont know where else to put this validation
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

export { splitIntoArray, formatArrIntoMatrix, groupArraysByProject };
