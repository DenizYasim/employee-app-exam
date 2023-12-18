import { dateDifferenceInDays } from "./dateDifferenceInDays";

function projectLongjevity(obj) {
	for (let key in obj) {
		const dateWorkedTogether = [];
		const arrayOfFinal = [];
		let earliestDate = Number.MAX_SAFE_INTEGER;
		let latestDate = 0;

		arrayOfFinal.push(key);

		obj[key].forEach((value) => {
			arrayOfFinal.push(value[0]);

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

		arrayOfFinal.push(lingevity);
		console.log(arrayOfFinal);
	}
}
export { projectLongjevity };
