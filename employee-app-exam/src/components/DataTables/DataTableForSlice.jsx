import styles from "./DataTable.module.css";

import useSearch from "../../hooks/useSearch";

function DataTableForSlice({ arangedArr, firstTh, secondTh, thirdTh }) {
	const { filteredData } = useSearch(arangedArr);

	return (
		<>
			{filteredData.length ? (
				<table className={styles.container}>
					<thead>
						<tr className={styles.tableTr}>
							<th>{firstTh}</th>
							<th>{secondTh}</th>
							<th>{thirdTh}</th>
						</tr>
					</thead>
					<tbody className={styles.tbody}>
						{filteredData.map((project, i) => {
							const employees = project.slice(1, project.length - 1);
							return (
								<tr key={i}>
									<td>{project[0]}</td>
									<td>{employees.join(", ")}</td>
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

export default DataTableForSlice;
