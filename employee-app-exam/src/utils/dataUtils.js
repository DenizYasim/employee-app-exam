function splitIntoArray(string) {
	return string.split("\r\n");
}

function formatArrIntoMatrix(array) {
	return array
		.filter((row) => row.trim().lenght !== 0)
		.map((row) => row.split(",").map((cell) => cell.trim()));
}

export { splitIntoArray, formatArrIntoMatrix };
