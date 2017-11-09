import {GAME_FIELD_WIDTH} from './constants.js';
export default function initCursorCoordinates(){
	return {
		y: 0,
		x: ~~((GAME_FIELD_WIDTH-1)/2)
	}
}
