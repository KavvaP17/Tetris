import cloneArray from './clone2Array.js';

export default function figureToTable(state){
	let figureArray = cloneArray(state.nextFigure);
	return figureArray.map((item, indexRow)=>{
		return '<tr>'+(item.map((field, indexCol)=>{
			return '<td>'+((field !== 1) ? '' : '<div class="noEmpty"></div>' )+'</td>';
		})).join('')+'</tr>';
	}).join('');
}
