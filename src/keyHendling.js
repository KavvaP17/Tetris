import {GAME_FIELD_HEIGHT, GAME_FIELD_WIDTH} from './constants.js';
import figureRotate from './figureRotate.js';
import render from './render.js';
import {gameContainer, scoreContainer, figureContainer} from './docElements.js';

export default function (e){
    switch (e.code) {
		case 'Space':
			this.isStart = true;
			break;
		case 'Enter':
			if (this.isStart && !this.isGameOver){
				this.currentFigure = figureRotate(this.currentFigure,1);
			}
			break;
		case 'KeyD':
			if (this.isStart && !this.isGameOver){
				if (this.cursorCoordinates.x+1 < GAME_FIELD_WIDTH){
					this.cursorCoordinates.x +=1;
				}
			}
			break;
		case 'KeyA':
			if (this.isStart && !this.isGameOver){
				if (this.cursorCoordinates.x-1 >=0){
					this.cursorCoordinates.x -=1;
				}
			}
			break;
		case 'KeyS':
			if (this.isStart && !this.isGameOver){
				if (this.cursorCoordinates.y+1 < GAME_FIELD_HEIGHT){
					this.cursorCoordinates.y +=1;
				}
			}
			break;

      default:
        break;
    }

	render(this, gameContainer, scoreContainer, figureContainer);
}
