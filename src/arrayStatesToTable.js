import figureInGameLocation from './figureInGameLocation.js';
import cloneArray from './clone2Array.js';
import newFigure from './newFigure.js';
import destroyFullLine from './destroyFullLine.js';
import isGameOver from './isGameOver.js';

export default function arrayStatesToTable(state){
	let newArrayLocation = figureInGameLocation(cloneArray(state.gameArrayLocation), state.currentFigure, state.cursorCoordinates);
	if (newArrayLocation === null){
		if (isGameOver(state.cursorCoordinates)){
			state.isGameOver = true;
		}
		newFigure(state);
		state.gameArrayLocation = state.fullGameArrayLocation;
		state.gameArrayLocation = destroyFullLine(state);
		newArrayLocation = cloneArray(state.gameArrayLocation);
	}
	state.fullGameArrayLocation = newArrayLocation;
	return newArrayLocation.map((item, indexRow)=>{
		return '<tr>'+(item.map((field, indexCol)=>{
			return '<td>'+((field !== 1) ? '' : '<div class="noEmpty"></div>' )+'</td>';
		})).join('')+'</tr>';
	}).join('');
}
