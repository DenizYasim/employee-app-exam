function dateDifferenceInDays(date1, date2) {
	const _MS_PER_DAY = 1000 * 60 * 60 * 24;

	const d1 = new Date(date1);
	const d2 = new Date(date2);

	const utc1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
	const utc2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());

	console.log(utc1);
	console.log(utc2);

	return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export default dateDifferenceInDays;
