//data 1
// const teamDolphinsFirstGame = 96;
// const teamDolphinsSecondGame = 108;
// const teamDolphinsThirdGame = 89;
// const teamKoalasFirstGame = 88;
// const teamKoalasSecondGame = 91;
// const teamKoalasThirdGame = 110;

//data bonus 1

// const teamDolphinsFirstGame = 97;
// const teamDolphinsSecondGame = 112;
// const teamDolphinsThirdGame = 101;
// const teamKoalasFirstGame = 109;
// const teamKoalasSecondGame = 95;
// const teamKoalasThirdGame = 123;

//data bonus 2

const teamDolphinsFirstGame = 97;
const teamDolphinsSecondGame = 112;
const teamDolphinsThirdGame = 101;
const teamKoalasFirstGame = 109;
const teamKoalasSecondGame = 95;
const teamKoalasThirdGame = 106;

const teamDolphinsAverageScore = (teamDolphinsFirstGame + teamDolphinsSecondGame + teamDolphinsThirdGame) / 3;
const teamKoalasAverageScore = (teamKoalasFirstGame + teamKoalasSecondGame + teamKoalasThirdGame) / 3;

if (teamDolphinsAverageScore > teamKoalasAverageScore && teamDolphinsAverageScore >= 100) {
	console.log(`Winner is a Dolphins team! 🥇`);
};

if (teamDolphinsAverageScore < teamKoalasAverageScore && teamKoalasAverageScore >= 100) {
	console.log(`Winner is a Koalas team! 🥇`);
}; 

if (teamDolphinsAverageScore === teamKoalasAverageScore && teamDolphinsAverageScore >= 100 && teamKoalasAverageScore >= 100) {
	console.log(`Draw! 📍`);
};
