import {GAME_FIELD_WIDTH} from './constants.js';

export default function moveFigureFromRightBorder(figureLocation, cursorCoordinates){
	let cursorLeftMove = 0;
	figureLocation.forEach((rows, indexRow)=>{
		rows.forEach((item,indexCol)=>{
			if (cursorCoordinates.x + indexCol +1 >= GAME_FIELD_WIDTH){
				if (item === 1){
					if (cursorCoordinates.x + indexCol + 1 - GAME_FIELD_WIDTH > cursorLeftMove){
						cursorLeftMove = cursorCoordinates.x + indexCol +1 - GAME_FIELD_WIDTH;
					}
				}
			}
		})
	})
	cursorCoordinates.x -= cursorLeftMove;
}
