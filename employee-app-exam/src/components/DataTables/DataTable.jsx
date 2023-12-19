import React from "react";
import styles from "./DataTable.module.css";

function DataTable({ projectTime }) {
	return (
		<>
			{projectTime.length ? (
				<>
					<table className={styles.container}>
						<thead>
							<tr className={styles.tableTr}>
								<th>Project ID</th>
								<th>Employee IDs</th>
								<th>Project Longevity(days)</th>
							</tr>
						</thead>
						<tbody className={styles.tbody}>
							{projectTime.map((project, i) => {
								const employees = project.slice(1, project.length - 1);

								return (
									<tr key={"tableMain" + i}>
										<td>{project[0]}</td>
										<td>{employees.join(", ")}</td>
										<td>{project[project.length - 1]}</td>
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

export default DataTable;
