function splitIntoArray(string) {
	return string.split("\r\n");
}

function formatArrIntoMatrix(array) {
	return (
		array
			//filters out empty rows or ones with just a space
			.filter((row) => row.trim().lenght !== 0)

			.map((row) => row.split(",").map((cell) => cell.trim()))
	);
}

function groupArraysByProject(data) {
	let groupedArrays = {};

	for (let array of data) {
		let id = array[1];

		if (array[3] === "NULL") {
			array[3] = new Date();
		}

		if (groupedArrays[id]) {
			groupedArrays[id].push(array);
		} else {
			groupedArrays[id] = [array];
		}
	}

	return groupedArrays;
}

export { splitIntoArray, formatArrIntoMatrix, groupArraysByProject };
