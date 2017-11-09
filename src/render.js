import arrayStatesToTable from './arrayStatesToTable.js';
import figureToTable from './figureToTable.js';

export default function render(state, game, score, figure){
	game.innerHTML = arrayStatesToTable(state);
	figure.innerHTML = figureToTable(state);
	if (!state.isGameOver){
		score.innerHTML = state.score;
	} else {
		score.innerHTML = state.score + '<br><b>You lose:(</b>';
	}
}
