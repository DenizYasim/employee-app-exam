import React from "react";

function DataTable({ data }) {
	return (
		<table>
			<thead>
				<tr>
					<th>Employee ID</th>
					<th>Project ID</th>
					<th>Start Date</th>
					<th>End Date</th>
				</tr>
			</thead>
			<tbody>
				{data.map((row, index) => {
					return (
						<tr key={index}>
							<td>{row[0]}</td>
							<td>{row[1]}</td>
							<td>{row[2]}</td>
							<td>{row[3]}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default DataTable;
