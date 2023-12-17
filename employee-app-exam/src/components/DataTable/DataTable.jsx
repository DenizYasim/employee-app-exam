import React from "react";

function DataTable({ data }) {
	return (
		<table>
			<thead>
				<tr>
					<th>Project ID</th>
					<th>Employee ID</th>
					<th>Start Date</th>
					<th>End Date</th>
				</tr>
			</thead>
			<tbody>
				{Object.entries(data).map((data, i) => {
					return (
						<tr key={i}>
							<td>{data[0]}</td>
							<td>
								{data[1].map((item) => {
									let temp = "";
									temp += `${item[0]},`;
									return temp;
								})}
							</td>
							<td></td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default DataTable;
