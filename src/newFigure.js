import initCursorCoordinates from './initCursorCoordinates.js';
import getFigure from './getFigure.js';

export default function newFigure(state){
	state.cursorCoordinates =  initCursorCoordinates();
	state.currentFigure = state.nextFigure;
	state.nextFigure =	getFigure();
}
