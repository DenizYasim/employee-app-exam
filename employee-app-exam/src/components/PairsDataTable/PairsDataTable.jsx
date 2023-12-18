import React from "react";

function PairsDataTable({ data, employeePairs }) {
	employeePairs.sort((a, b) => {
		if (a[2] > b[2]) {
			return -1;
		}
	});
	return (
		<table>
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
							<td>{pair[0]}</td>
							<td>{pair[1]}</td>
							<td>{pair[2]}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default PairsDataTable;
