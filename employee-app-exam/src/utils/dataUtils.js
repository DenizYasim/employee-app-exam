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

function convertDateIntoUtc(date) {
	if (date === "NULL") {
		const date1 = new Date();
		const utc = Date.UTC(
			date1.getFullYear(),
			date1.getMonth(),
			date1.getDate()
		);
		return utc;
	} else {
		const dat = new Date(date);
		const utc = Date.UTC(dat.getFullYear(), dat.getMonth(), dat.getDate());
		return utc;
	}
}

function groupArraysByProject(data) {
	let groupedArrays = {};

	for (let array of data) {
		let id = array[1];

		array[2] = convertDateIntoUtc(array[2]);
		array[3] = convertDateIntoUtc(array[3]);

		if (groupedArrays[id]) {
			groupedArrays[id].push(array);
		} else {
			groupedArrays[id] = [array];
		}
	}

	return groupedArrays;
}

export { splitIntoArray, formatArrIntoMatrix, groupArraysByProject };
