import React from "react";

function DataTable({ data, projectTime }) {
	projectTime.sort((a, b) => {
		if (a[a.length - 1] > b[b.length - 1]) {
			return -1;
		}
	});
	return (
		<table>
			<thead>
				<tr>
					<th>Project ID</th>
					<th>Employee IDs</th>
					<th>Days Worked</th>
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
	);
}

export default DataTable;
