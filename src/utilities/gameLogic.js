export default function gameResults(playerChoice, computerChoice) {
	const rules = {
		scissors: ['paper', 'lizard'],
		paper: ['rock', 'spock'],
		rock: ['lizard', 'scissors'],
		lizard: ['spock', 'paper'],
		spock: ['scissors', 'rock'],
	};

	const p1 = playerChoice.toLowerCase();
	const p2 = computerChoice.toLowerCase();

	if (!rules[p1] || !rules[p2]) throw new Error('Invalid arguments');

	if (p1 === p2) return 'tie';

	return rules[p1].includes(p2) ? 'win' : 'lose';
}
