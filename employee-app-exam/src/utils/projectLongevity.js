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
		let lingevity = dateDifferenceInDays(
			dateWorkedTogether[0],
			dateWorkedTogether[1]
		);

		arrayOfProject.push(lingevity);
		arrayOfFinal.push(arrayOfProject);
	}
	return arrayOfFinal;
}
export { projectLongjevity };
