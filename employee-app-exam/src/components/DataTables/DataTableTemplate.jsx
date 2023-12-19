import styles from "./DataTable.module.css";

import useSearch from "../../hooks/useSearch";

function DataTableTemplate({ arrOfInfo, firstTh, secondTh, thirdTh }) {
	const { filteredData } = useSearch(arrOfInfo);

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
							return (
								<tr key={i}>
									<td>{subArr[0]}</td>
									<td>{subArr[1]}</td>
									<td>{subArr[2]}</td>
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
