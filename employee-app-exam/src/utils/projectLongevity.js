import { dateDifferenceInDays } from "./dateDifferenceInDays";

function projectLongjevity(obj) {
	const arrayOfFinal = [];
	for (let key in obj) {
		const dateWorkedTogether = [];
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
		let longevity = dateDifferenceInDays(
			dateWorkedTogether[0],
			dateWorkedTogether[1]
		);

		arrayOfProject.push(longevity);
		arrayOfFinal.push(arrayOfProject);
	}
	return arrayOfFinal.sort((a, b) => {
		if (a[a.length - 1] > b[b.length - 1]) {
			return -1;
		}
	});
}
export { projectLongjevity };
