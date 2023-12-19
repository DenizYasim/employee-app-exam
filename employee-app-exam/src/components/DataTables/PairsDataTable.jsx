import React from "react";
import styles from "./DataTable.module.css";

function PairsDataTable({ employeePairs }) {
	return (
		<>
			{employeePairs.length ? (
				<table className={styles.container}>
					<thead>
						<tr className={styles.tableTr}>
							<th>Employee ID</th>
							<th>Employee ID</th>
							<th>Overlaping Work Days</th>
						</tr>
					</thead>
					<tbody className={styles.tbody}>
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
