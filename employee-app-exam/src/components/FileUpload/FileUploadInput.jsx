import React from "react";
import { formatArrIntoMatrix, splitIntoArray } from "../../utils/dataUtils";

function FileUploadInput() {
	function handleFileUpload(e) {
		e.preventDefault();
		const file = e.target.files[0];
		const reader = new FileReader();

		//Catches if file upload is canceled
		if (!!file) {
			reader.readAsText(file);

			reader.onload = function () {
				const dataArray = splitIntoArray(reader.result);
				const dataMatrix = formatArrIntoMatrix(dataArray);

				console.log(dataMatrix);
			};
		}
	}

	return (
		<div>
			<input type="file" onChange={handleFileUpload} />
		</div>
	);
}

export default FileUploadInput;
