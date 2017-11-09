/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const GAME_FIELD_WIDTH = 10;
/* harmony export (immutable) */ __webpack_exports__["c"] = GAME_FIELD_WIDTH;

const GAME_FIELD_HEIGHT = 20;
/* harmony export (immutable) */ __webpack_exports__["b"] = GAME_FIELD_HEIGHT;

const TETRIS_SPEED = 300;
/* harmony export (immutable) */ __webpack_exports__["d"] = TETRIS_SPEED;

const COUNT_FIGURE = 8;
/* harmony export (immutable) */ __webpack_exports__["a"] = COUNT_FIGURE;


const DIRECTION_RIGHT = 'DIRECTION_RIGHT';
/* unused harmony export DIRECTION_RIGHT */

const DIRECTION_LEFT = 'DIRECTION_LEFT';
/* unused harmony export DIRECTION_LEFT */

const DIRECTION_ROTATE = 'DIRECTION_ROTATE';
/* unused harmony export DIRECTION_ROTATE */

const DIRECTION_SPEED = 'DIRECTION_SPEED';
/* unused harmony export DIRECTION_SPEED */


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cloneArray;
function cloneArray(arr) {
	let newArr = [...arr];
	newArr.forEach((item, index) => {
		newArr[index] = [...item];
	});
	return newArr;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initCursorCoordinates;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);

function initCursorCoordinates() {
	return {
		y: 0,
		x: ~~((__WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* GAME_FIELD_WIDTH */] - 1) / 2)
	};
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFigure;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__figure_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__figureRotate_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(0);




function getFigure() {
	return Object(__WEBPACK_IMPORTED_MODULE_1__figureRotate_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__figure_js__["a" /* default */][~~(__WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* COUNT_FIGURE */] * Math.random())], ~~(1 + Math.random() * 5));
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = figureRotate;
function figureRotate(figure, numRotate) {
	let newFigure = [];
	let masWidth = figure.length;
	//newFigure init
	for (let i = 0; i < masWidth; i++) {
		newFigure[i] = [];
	}
	//rotate figure
	for (let i = 0; i < numRotate; i++) {
		figure.forEach((item, indexRow) => {
			item.forEach((cell, indexCol) => {
				newFigure[indexCol][masWidth - 1 - indexRow] = cell;
			});
		});
	}
	//num empty cols and rows
	let numEmptyRows = 0;
	let numEmptyCols = 0;
	let emptyRowsFlag = true;
	let emptyColsFlag = true;
	let i = 0;
	while (emptyRowsFlag || emptyColsFlag) {
		for (let j = 0; j < newFigure.length; j++) {
			if (newFigure[i][j] === 1) {
				emptyColsFlag = false;
			}
			if (newFigure[j][i] === 1) {
				emptyRowsFlag = false;
			}
		}
		if (emptyColsFlag) {
			numEmptyCols++;
		}
		if (emptyRowsFlag) {
			numEmptyRows++;
		}
		i++;
	}

	//delete empty rows and cols
	for (let i = 0; i < newFigure.length; i++) {
		for (let j = 0; j < newFigure.length; j++) {
			newFigure[i][j] = i + numEmptyCols < newFigure.length && j + numEmptyRows < newFigure.length ? newFigure[i + numEmptyCols][j + numEmptyRows] : 0;
		}
	}

	return newFigure;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayStatesToTable_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__figureToTable_js__ = __webpack_require__(17);



function render(state, game, score, figure) {
	game.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_0__arrayStatesToTable_js__["a" /* default */])(state);
	figure.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_1__figureToTable_js__["a" /* default */])(state);
	if (!state.isGameOver) {
		score.innerHTML = state.score;
	} else {
		score.innerHTML = state.score + '<br><b>You lose:(</b>';
	}
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const gameContainer = document.getElementById('game_container');
/* harmony export (immutable) */ __webpack_exports__["b"] = gameContainer;

const scoreContainer = document.getElementById('score');
/* harmony export (immutable) */ __webpack_exports__["c"] = scoreContainer;

const figureContainer = document.getElementById('figure_container');
/* harmony export (immutable) */ __webpack_exports__["a"] = figureContainer;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initGameArray_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initCursorCoordinates_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getFigure_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__render_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keyHendling_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__docElements_js__ = __webpack_require__(6);








const gameState = {
	gameArrayLocation: Object(__WEBPACK_IMPORTED_MODULE_1__initGameArray_js__["a" /* default */])(),
	cursorCoordinates: Object(__WEBPACK_IMPORTED_MODULE_2__initCursorCoordinates_js__["a" /* default */])(),
	currentFigure: Object(__WEBPACK_IMPORTED_MODULE_3__getFigure_js__["a" /* default */])(),
	nextFigure: Object(__WEBPACK_IMPORTED_MODULE_3__getFigure_js__["a" /* default */])(),
	fullGameArrayLocation: Object(__WEBPACK_IMPORTED_MODULE_1__initGameArray_js__["a" /* default */])(),
	isStart: false,
	score: 0,
	isGameOver: false
};

Object(__WEBPACK_IMPORTED_MODULE_4__render_js__["a" /* default */])(gameState, __WEBPACK_IMPORTED_MODULE_6__docElements_js__["b" /* gameContainer */], __WEBPACK_IMPORTED_MODULE_6__docElements_js__["c" /* scoreContainer */], __WEBPACK_IMPORTED_MODULE_6__docElements_js__["a" /* figureContainer */]);

document.addEventListener('keypress', __WEBPACK_IMPORTED_MODULE_5__keyHendling_js__["a" /* default */].bind(gameState));

setInterval(() => {
	if (gameState.isStart && !gameState.isGameOver) {
		gameState.cursorCoordinates.y += 1;
		Object(__WEBPACK_IMPORTED_MODULE_4__render_js__["a" /* default */])(gameState, __WEBPACK_IMPORTED_MODULE_6__docElements_js__["b" /* gameContainer */], __WEBPACK_IMPORTED_MODULE_6__docElements_js__["c" /* scoreContainer */], __WEBPACK_IMPORTED_MODULE_6__docElements_js__["a" /* figureContainer */]);
	}
}, __WEBPACK_IMPORTED_MODULE_0__constants_js__["d" /* TETRIS_SPEED */]);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initGameArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);


function initGameArray() {
	let arr = [];
	for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_0__constants_js__["b" /* GAME_FIELD_HEIGHT */]; i++) {
		arr[i] = [];
		for (let j = 0; j < __WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* GAME_FIELD_WIDTH */]; j++) {
			arr[i][j] = 0;
		}
	}
	return arr;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const figureArray = [[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1]], [[0, 0, 0], [0, 1, 0], [1, 1, 1]], [[1, 1], [1, 1]], [[1, 0], [1, 1]], [[0, 0, 0], [1, 0, 0], [1, 1, 1]], [[0, 0, 0], [0, 0, 1], [1, 1, 1]], [[0, 0, 0], [1, 1, 0], [0, 1, 1]], [[0, 0, 0], [0, 1, 1], [1, 1, 0]]];

/* harmony default export */ __webpack_exports__["a"] = (figureArray);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = arrayStatesToTable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__figureInGameLocation_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clone2Array_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newFigure_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__destroyFullLine_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isGameOver_js__ = __webpack_require__(16);






function arrayStatesToTable(state) {
	let newArrayLocation = Object(__WEBPACK_IMPORTED_MODULE_0__figureInGameLocation_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__clone2Array_js__["a" /* default */])(state.gameArrayLocation), state.currentFigure, state.cursorCoordinates);
	if (newArrayLocation === null) {
		if (Object(__WEBPACK_IMPORTED_MODULE_4__isGameOver_js__["a" /* default */])(state.cursorCoordinates)) {
			state.isGameOver = true;
		}
		Object(__WEBPACK_IMPORTED_MODULE_2__newFigure_js__["a" /* default */])(state);
		state.gameArrayLocation = state.fullGameArrayLocation;
		state.gameArrayLocation = Object(__WEBPACK_IMPORTED_MODULE_3__destroyFullLine_js__["a" /* default */])(state);
		newArrayLocation = Object(__WEBPACK_IMPORTED_MODULE_1__clone2Array_js__["a" /* default */])(state.gameArrayLocation);
	}
	state.fullGameArrayLocation = newArrayLocation;
	return newArrayLocation.map((item, indexRow) => {
		return '<tr>' + item.map((field, indexCol) => {
			return '<td>' + (field !== 1 ? '' : '<div class="noEmpty"></div>') + '</td>';
		}).join('') + '</tr>';
	}).join('');
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = figureInGameLocation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moveFigureFromRightBorder_js__ = __webpack_require__(13);



function figureInGameLocation(arrayLocation, figureLocation, cursorCoordinates) {
	let key = true;
	Object(__WEBPACK_IMPORTED_MODULE_1__moveFigureFromRightBorder_js__["a" /* default */])(figureLocation, cursorCoordinates);
	figureLocation.forEach((rows, indexRow) => {
		if (cursorCoordinates.y - indexRow < __WEBPACK_IMPORTED_MODULE_0__constants_js__["b" /* GAME_FIELD_HEIGHT */] && cursorCoordinates.y - indexRow >= 0) {
			rows.forEach((item, indexCol) => {
				if (cursorCoordinates.x + indexCol < __WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* GAME_FIELD_WIDTH */]) {
					arrayLocation[cursorCoordinates.y - indexRow][cursorCoordinates.x + indexCol] += item;
					if (arrayLocation[cursorCoordinates.y - indexRow][cursorCoordinates.x + indexCol] > 1) {
						key = false;
					}
				}
			});
		} else if (cursorCoordinates.y - indexRow >= __WEBPACK_IMPORTED_MODULE_0__constants_js__["b" /* GAME_FIELD_HEIGHT */]) {
			key = false;
		}
	});
	return key ? arrayLocation : null;
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = moveFigureFromRightBorder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);


function moveFigureFromRightBorder(figureLocation, cursorCoordinates) {
	let cursorLeftMove = 0;
	figureLocation.forEach((rows, indexRow) => {
		rows.forEach((item, indexCol) => {
			if (cursorCoordinates.x + indexCol + 1 >= __WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* GAME_FIELD_WIDTH */]) {
				if (item === 1) {
					if (cursorCoordinates.x + indexCol + 1 - __WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* GAME_FIELD_WIDTH */] > cursorLeftMove) {
						cursorLeftMove = cursorCoordinates.x + indexCol + 1 - __WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* GAME_FIELD_WIDTH */];
					}
				}
			}
		});
	});
	cursorCoordinates.x -= cursorLeftMove;
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newFigure;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initCursorCoordinates_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getFigure_js__ = __webpack_require__(3);



function newFigure(state) {
	state.cursorCoordinates = Object(__WEBPACK_IMPORTED_MODULE_0__initCursorCoordinates_js__["a" /* default */])();
	state.currentFigure = state.nextFigure;
	state.nextFigure = Object(__WEBPACK_IMPORTED_MODULE_1__getFigure_js__["a" /* default */])();
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = destroyFullLine;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clone2Array_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_js__ = __webpack_require__(0);



function destroyFullLine(state) {
	let arr = Object(__WEBPACK_IMPORTED_MODULE_0__clone2Array_js__["a" /* default */])(state.gameArrayLocation);
	let num = 0;
	arr = arr.filter((line, index) => {
		let flag = false;
		line.forEach((item, index) => {
			if (item === 0) {
				flag = true;
			}
		});
		if (!flag) {
			num++;
		}
		return flag;
	});
	if (num > 0) {
		state.score += num;
		let emptyLine = [];
		for (let j = 0; j < __WEBPACK_IMPORTED_MODULE_1__constants_js__["c" /* GAME_FIELD_WIDTH */]; j++) {
			emptyLine[j] = 0;
		}
		for (let i = 0; i < num; i++) {
			arr.unshift([...emptyLine]);
		}
	}
	return arr;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isGameOver;
function isGameOver(cursorCoords) {
	if (cursorCoords.y <= 1) {
		return true;
	}
	return false;
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = figureToTable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clone2Array_js__ = __webpack_require__(1);


function figureToTable(state) {
	let figureArray = Object(__WEBPACK_IMPORTED_MODULE_0__clone2Array_js__["a" /* default */])(state.nextFigure);
	return figureArray.map((item, indexRow) => {
		return '<tr>' + item.map((field, indexCol) => {
			return '<td>' + (field !== 1 ? '' : '<div class="noEmpty"></div>') + '</td>';
		}).join('') + '</tr>';
	}).join('');
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__figureRotate_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__docElements_js__ = __webpack_require__(6);





/* harmony default export */ __webpack_exports__["a"] = (function (e) {
	switch (e.code) {
		case 'Space':
			this.isStart = true;
			break;
		case 'Enter':
			if (this.isStart && !this.isGameOver) {
				this.currentFigure = Object(__WEBPACK_IMPORTED_MODULE_1__figureRotate_js__["a" /* default */])(this.currentFigure, 1);
			}
			break;
		case 'KeyD':
			if (this.isStart && !this.isGameOver) {
				if (this.cursorCoordinates.x + 1 < __WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* GAME_FIELD_WIDTH */]) {
					this.cursorCoordinates.x += 1;
				}
			}
			break;
		case 'KeyA':
			if (this.isStart && !this.isGameOver) {
				if (this.cursorCoordinates.x - 1 >= 0) {
					this.cursorCoordinates.x -= 1;
				}
			}
			break;
		case 'KeyS':
			if (this.isStart && !this.isGameOver) {
				if (this.cursorCoordinates.y + 1 < __WEBPACK_IMPORTED_MODULE_0__constants_js__["b" /* GAME_FIELD_HEIGHT */]) {
					this.cursorCoordinates.y += 1;
				}
			}
			break;

		default:
			break;
	}

	Object(__WEBPACK_IMPORTED_MODULE_2__render_js__["a" /* default */])(this, __WEBPACK_IMPORTED_MODULE_3__docElements_js__["b" /* gameContainer */], __WEBPACK_IMPORTED_MODULE_3__docElements_js__["c" /* scoreContainer */], __WEBPACK_IMPORTED_MODULE_3__docElements_js__["a" /* figureContainer */]);
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map