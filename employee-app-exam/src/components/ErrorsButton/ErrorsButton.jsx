import React, { useState } from "react";
import styles from "./ErrorsButton.module.css";

function ErrorsButton({ errors }) {
	const [visibility, setVisibility] = useState();
	const toggleVisibility = () => {
		setVisibility(!visibility);
	};

	return errors.length ? (
		<>
			<button className={styles.button} onClick={toggleVisibility}>
				Errors
			</button>
			{visibility ? (
				<div className={styles.container}>
					{errors.map((error, i) => {
						return <p key={i}>{error}</p>;
					})}
				</div>
			) : null}
		</>
	) : null;
}

export default ErrorsButton;
