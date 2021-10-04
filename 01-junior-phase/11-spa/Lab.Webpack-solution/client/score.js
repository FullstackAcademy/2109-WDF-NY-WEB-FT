let takeoutScore = 0;
let leftoversScore = 0;

export const getWinner = () => {
	if (takeoutScore === leftoversScore) return "It's a tie";
	else {
		return takeoutScore > leftoversScore ? "Order out" : "Eat Leftovers";
	}
};

export const voteTakeout = () => {
	takeoutScore++;
};

export const voteLeftovers = () => {
	leftoversScore++;
};