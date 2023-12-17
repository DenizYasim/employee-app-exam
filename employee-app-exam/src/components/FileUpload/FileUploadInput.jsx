import React from "react";

function FileUploadInput() {
	function handleFileUpload(e) {
		e.preventDefault();
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.readAsText(file);

		reader.onload = function () {};
	}

	return (
		<div>
			<input type="file" onChange={handleFileUpload} />
		</div>
	);
}

export default FileUploadInput;
