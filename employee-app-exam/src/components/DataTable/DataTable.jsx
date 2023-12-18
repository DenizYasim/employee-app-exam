import React from "react";
import styles from "./DataTable.module.css";

function DataTable({ projectTime }) {
	return (
		<>
			{projectTime.length ? (
				<table className={styles.container}>
					<thead>
						<tr>
							<th>Project ID</th>
							<th>Employee IDs</th>
							<th>Days Worked on Project</th>
						</tr>
					</thead>
					<tbody>
						{projectTime.map((project, i) => {
							const Employees = project.slice(1, project.length - 1);
							return (
								<tr key={i}>
									<td>{project[0]}</td>
									<td>{Employees.join(", ")}</td>
									<td>{project[project.length - 1]}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : null}
		</>
	);
}

export default DataTable;
