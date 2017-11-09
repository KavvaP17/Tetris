import {GAME_FIELD_WIDTH, GAME_FIELD_HEIGHT} from './constants.js';
import moveFigureFromRightBorder from './moveFigureFromRightBorder.js';

export default function figureInGameLocation(arrayLocation, figureLocation, cursorCoordinates){
	let key = true;
	moveFigureFromRightBorder(figureLocation, cursorCoordinates);
	figureLocation.forEach((rows, indexRow)=>{
		if (cursorCoordinates.y - indexRow < GAME_FIELD_HEIGHT && cursorCoordinates.y - indexRow >=0){
			rows.forEach((item, indexCol)=>{
				if (cursorCoordinates.x + indexCol < GAME_FIELD_WIDTH){
					arrayLocation[cursorCoordinates.y - indexRow][cursorCoordinates.x + indexCol] += item;
					if (arrayLocation[cursorCoordinates.y - indexRow][cursorCoordinates.x + indexCol]>1){
					key = false;
					}
				}
			});
		}else if (cursorCoordinates.y - indexRow >= GAME_FIELD_HEIGHT){
		 	key = false;
		}
	});
	return key?arrayLocation:null;
}
