export const getMapValuesSum = (map: Map<string, number>) => {
	let sum = 0;
	map.forEach((value) => {
		sum += value;
	});
	return sum;
};
