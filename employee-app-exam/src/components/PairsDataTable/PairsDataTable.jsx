import React from "react";
import styles from "./PairsDataTable.module.css";

function PairsDataTable({ employeePairs }) {
	return (
		<>
			{employeePairs.length ? (
				<table className={styles.container}>
					<thead>
						<tr>
							<th>Employee ID</th>
							<th>Employee IDs</th>
							<th>Days Worked Together</th>
						</tr>
					</thead>
					<tbody>
						{employeePairs.map((pair, i) => {
							return (
								<tr key={i}>
									<td>{pair[1]}</td>
									<td>{pair[2]}</td>
									<td>{pair[3]}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : null}
		</>
	);
}

export default PairsDataTable;
