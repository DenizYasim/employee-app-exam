import styles from "./DataTable.module.css";

import useSearch from "../../hooks/useSearch";

function DataTableTemplate({ data, firstTh, secondTh, thirdTh }) {
	const { filteredData } = useSearch(data);

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
						{filteredData.map((subArr, i) => {
							const midArr = subArr.slice(1, subArr.length - 1);
							return (
								<tr key={i}>
									<td>{subArr[0]}</td>
									<td>{midArr.join(", ")}</td>
									<td>{subArr[subArr.length - 1]}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : null}
		</>
	);
}

export default DataTableTemplate;
