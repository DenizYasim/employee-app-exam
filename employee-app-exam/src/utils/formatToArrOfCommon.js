import {
	calculateDaysTogether,
	dateDifferenceInDays,
} from "./dateCalculations";

function formatToArrOfCommon(obj) {
	const employeesWorkingTogether = [];
	for (let key in obj) {
		if (obj[key].length < 1) {
			return;
		}

		for (let i = 0; i < obj[key].length; i++) {
			for (let j = i + 1; j < obj[key].length; j++) {
				let flag = true;
				const pairsAndTime = [];
				let overlap = 0;

				pairsAndTime.push(obj[key][i][0]);
				pairsAndTime.push(obj[key][j][0]);
				if (
					obj[key][i][2] < obj[key][j][3] &&
					obj[key][j][2] < obj[key][i][3]
				) {
					overlap = calculateDaysTogether(
						obj[key][i][2],
						obj[key][i][3],
						obj[key][j][2],
						obj[key][j][3]
					);
				}
				pairsAndTime.push(
					dateDifferenceInDays(obj[key][i][2], obj[key][i][3]) +
						dateDifferenceInDays(obj[key][j][2], obj[key][j][3]) -
						overlap
				);

				for (let k = 0; k < employeesWorkingTogether.length; k++) {
					if (
						(employeesWorkingTogether[k][0] === pairsAndTime[0] &&
							employeesWorkingTogether[k][1] === pairsAndTime[1]) ||
						(employeesWorkingTogether[k][1] === pairsAndTime[0] &&
							employeesWorkingTogether[k][0] === pairsAndTime[1])
					) {
						flag = false;
						employeesWorkingTogether[k][2] += pairsAndTime[2];
					}
				}
				if (flag) {
					employeesWorkingTogether.push(pairsAndTime);
				}
			}
		}
	}
	return employeesWorkingTogether.sort((a, b) => {
		return b[2] - a[2];
	});
}

export default formatToArrOfCommon;
