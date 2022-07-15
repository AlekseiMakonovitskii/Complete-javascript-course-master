const calcAverage = function(game1, game2, game3) {
	return (game1 + game2 + game3) / 3;
}

// const averageDolphins = calcAverage(44, 23, 71);
// const averageKoalas = calcAverage(65, 54, 49);

const averageDolphins = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);

const checkWinner = function(avgDolhins, avgKoalas) {
	if (avgKoalas >= avgDolhins * 2) {
		return `Koalas won! ${avgKoalas} vs. ${avgDolhins}`;
	};

	if (avgDolhins >= avgKoalas * 2) {
		return `Dolphins won! ${avgDolhins} vs. ${avgKoalas}`;
	}; 

	return `No team won...`;
}

console.log(checkWinner(averageDolphins, averageKoalas));
