function filterEmptyStringInArr(arr) {
	return arr.filter((row) => {
		return row.length > 1;
	});
}

function sanitizeMatrixFromIncompleteFields(matrix) {
	//Catches if a row doesn't have all fields
	matrix.forEach((row, index) => {
		if (row.length !== 4) {
			matrix.splice(index, 1);
		}
	});

	return matrix;
}

function incompleteFieldsArr(matrix) {
	const errors = [];
	matrix.forEach((row, index) => {
		if (row.length !== 4) {
			errors.push(
				`Information on row ${
					index + 1
				} is missing a value and will not be taken into account.`
			);
		}
	});

	return errors;
}

export {
	filterEmptyStringInArr,
	sanitizeMatrixFromIncompleteFields,
	incompleteFieldsArr,
};
