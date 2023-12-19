import React from "react";
import styles from "./DataTable.module.css";

function ProjectIndividualsTable({ individualTime }) {
	return (
		<>
			{individualTime.length ? (
				<>
					<table className={styles.container}>
						<thead>
							<tr className={styles.tableTr}>
								<th>Project ID</th>
								<th>Employee IDs</th>
								<th>Days Worked on Project</th>
							</tr>
						</thead>
						<tbody className={styles.tbody}>
							{individualTime.map((individual, i) => {
								return (
									<tr key={"tableMain" + i}>
										<td>{individual[0]}</td>
										<td>{individual[1]}</td>
										<td>{individual[2]}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</>
			) : null}
		</>
	);
}

export default ProjectIndividualsTable;
