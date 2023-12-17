import React from "react";

function FileUploadInput({ changeHandler }) {
	return (
		<div>
			<input type="file" onChange={changeHandler} />
		</div>
	);
}

export default FileUploadInput;
