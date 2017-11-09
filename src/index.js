import {TETRIS_SPEED} from './constants.js';
import initGameArray from './initGameArray.js';
import initCursorCoordinates from './initCursorCoordinates.js';
import getFigure from './getFigure.js';
import render from './render.js';
import keyHendling from './keyHendling.js';
import {gameContainer, scoreContainer, figureContainer} from './docElements.js';

const gameState = {
	gameArrayLocation: initGameArray(),
	cursorCoordinates: initCursorCoordinates(),
	currentFigure: getFigure(),
	nextFigure:	getFigure(),
	fullGameArrayLocation: initGameArray(),
	isStart: false,
	score: 0,
	isGameOver: false,
}

render(gameState, gameContainer, scoreContainer, figureContainer);

document.addEventListener('keypress', keyHendling.bind(gameState));

setInterval(()=>{
  if (gameState.isStart && !gameState.isGameOver) {
	 gameState.cursorCoordinates.y +=1;
	  render(gameState, gameContainer, scoreContainer, figureContainer);
  }
},TETRIS_SPEED);
