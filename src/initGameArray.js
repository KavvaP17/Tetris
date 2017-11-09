import {GAME_FIELD_WIDTH, GAME_FIELD_HEIGHT} from './constants.js';

export default function initGameArray(){
	let arr = [];
	for (let i = 0; i < GAME_FIELD_HEIGHT; i++){
		arr[i]=[];
		for(let j = 0; j < GAME_FIELD_WIDTH; j++){
			arr[i][j] = 0;
		}
	}
	return arr;
}
