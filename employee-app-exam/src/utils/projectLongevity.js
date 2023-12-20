import { dateDifferenceInDays } from "./dateCalculations";

function projectLongjevity(obj) {
	const arrayOfFinal = [];
	for (let key in obj) {
		const dateWorkedTogether = [];
		const arrayExceptionDays = [];
		const arrayOfProject = [];
		let earliestDate = Number.MAX_SAFE_INTEGER;
		let latestDate = 0;

		arrayOfProject.push(key);

		obj[key].forEach((value) => {
			arrayOfProject.push(value[0]);

			if (value[2] < earliestDate) {
				earliestDate = value[2];
				dateWorkedTogether[0] = earliestDate;
			}

			if (value[3] > latestDate) {
				latestDate = value[3];
				dateWorkedTogether[1] = latestDate;
			}
		});
		for (let i = 0; i < obj[key].length; i++) {
			for (let j = i + 1; j < obj[key].length; j++) {
				if (obj[key][i][2] > obj[key][j][3]) {
					arrayExceptionDays.push(
						dateDifferenceInDays(obj[key][i][2], obj[key][j][3])
					);
				}
				if (obj[key][j][2] > obj[key][i][3]) {
					arrayExceptionDays.push(
						dateDifferenceInDays(obj[key][i][3], obj[key][j][2])
					);
				}
			}
		}
		let longevity = dateDifferenceInDays(
			dateWorkedTogether[0],
			dateWorkedTogether[1]
		);
		arrayExceptionDays.forEach((value) => {
			longevity -= value;
		});

		arrayOfProject.push(longevity);
		arrayOfFinal.push(arrayOfProject);
	}
	//Filters out rows that dont have more than one employee working
	const sendArr = arrayOfFinal.filter((row) => {
		return row.length > 3;
	});

	return sendArr.sort((a, b) => {
		return b[b.length - 1] - a[a.length - 1];
	});
}
export { projectLongjevity };
