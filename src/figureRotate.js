export default function figureRotate(figure, numRotate){
	let newFigure = [];
	let masWidth= figure.length;
	//newFigure init
	for(let i=0; i<masWidth; i++){
		newFigure[i] = [];
	}
	//rotate figure
	for(let i=0;i<numRotate;i++){
		figure.forEach((item, indexRow)=>{
			item.forEach((cell, indexCol)=>{
				newFigure[indexCol][masWidth-1-indexRow] = cell;
			})
		})
	}
	//num empty cols and rows
	let numEmptyRows = 0;
	let numEmptyCols = 0;
	let emptyRowsFlag = true;
	let emptyColsFlag = true;
	let i = 0;
	while (emptyRowsFlag || emptyColsFlag){
		for (let j = 0; j < newFigure.length; j++){
			if (newFigure[i][j] === 1){
				emptyColsFlag = false;
			}
			if (newFigure[j][i] === 1){
				emptyRowsFlag = false;
			}
		}
		if (emptyColsFlag){
			numEmptyCols++;
		}
		if (emptyRowsFlag){
			numEmptyRows++;
		}
		i++;
	}
	
	//delete empty rows and cols
	for (let i = 0; i < newFigure.length; i++){
		for (let j = 0; j < newFigure.length; j++){
			newFigure[i][j] = (i+numEmptyCols<newFigure.length && j+numEmptyRows<newFigure.length)?newFigure[i+numEmptyCols][j+numEmptyRows] : 0;
		}
	}

	return newFigure;
}
