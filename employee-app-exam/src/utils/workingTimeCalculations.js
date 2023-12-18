import { calculateDaysTogether } from "./dateDifferenceInDays";

function* workingTimeCalculations(obj, key) {
	for (let i = 0; i < obj[key].length; i++) {
		for (let j = i + 1; j < obj[key].length; j++) {
			const pairsAndTime = [];
			if (obj[key][i][2] < obj[key][j][3] && obj[key][j][2] < obj[key][i][3]) {
				pairsAndTime.push(obj[key][i][0]);
				pairsAndTime.push(obj[key][j][0]);
				pairsAndTime.push(
					calculateDaysTogether(
						obj[key][i][2],
						obj[key][i][3],
						obj[key][j][2],
						obj[key][j][3]
					)
				);
				yield pairsAndTime;
			} else return [];
		}
	}
	// return employeesWorkingTogether;
}

export default workingTimeCalculations;
