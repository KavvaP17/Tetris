import cloneArray from './clone2Array.js';
import {GAME_FIELD_WIDTH} from './constants.js'

export default function destroyFullLine(state){
	let arr = cloneArray(state.gameArrayLocation);
	let num = 0;
	arr = arr.filter((line,index)=>{
		let flag = false;
		line.forEach((item, index)=>{
			if (item===0){
				flag = true;
			}
		})
		if (!flag){
			num++;
		}
		return flag;
	});
	if (num > 0){
		state.score += num;
		let emptyLine=[];
		for (let j = 0; j < GAME_FIELD_WIDTH; j++){
			emptyLine[j] = 0;
		}
		for (let i = 0; i < num; i++){
			arr.unshift([...emptyLine]);
		}
	}
	return arr;
}
