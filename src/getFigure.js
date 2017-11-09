import figureArray from './figure.js';
import figureRotate from './figureRotate.js';
import {COUNT_FIGURE} from './constants.js';

export default function getFigure(){
	return figureRotate(figureArray[~~(COUNT_FIGURE*Math.random())],~~(1 + Math.random()*5));
}
