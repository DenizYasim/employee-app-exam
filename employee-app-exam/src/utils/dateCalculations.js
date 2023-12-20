function dateDifferenceInDays(date1, date2) {
	const _MS_PER_DAY = 1000 * 60 * 60 * 24;

	return Math.abs(Math.floor((date2 - date1) / _MS_PER_DAY));
}

function calculateDaysTogether(date1a, date1b, date2a, date2b) {
	const _MS_PER_DAY = 1000 * 60 * 60 * 24;

	const overLapStartDate = Math.max(date1a, date2a);
	const overLapEndDate = Math.min(date1b, date2b);

	return Math.abs(
		Math.floor((overLapEndDate - overLapStartDate) / _MS_PER_DAY)
	);
}

function convertDateIntoUtc(date) {
	if (date === "NULL") {
		const date1 = new Date();
		const utc = Date.UTC(
			date1.getFullYear(),
			date1.getMonth(),
			date1.getDate()
		);
		return utc;
	} else {
		const dat = new Date(date);
		const utc = Date.UTC(dat.getFullYear(), dat.getMonth(), dat.getDate());
		return utc;
	}
}

export { dateDifferenceInDays, calculateDaysTogether, convertDateIntoUtc };
