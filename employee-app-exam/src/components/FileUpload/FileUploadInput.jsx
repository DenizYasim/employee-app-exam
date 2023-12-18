import React from "react";
import styles from "./FileUpload.module.css";

function FileUploadInput({ changeHandler }) {
	return (
		<div className={styles.container}>
			<label className={styles.label}>
				<input type="file" onChange={changeHandler} className={styles.input} />
				Choose File
			</label>
		</div>
	);
}

export default FileUploadInput;
