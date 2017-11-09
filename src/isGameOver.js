export default function isGameOver(cursorCoords){
	if (cursorCoords.y<=1){
		return true;
	}
	return false;
}
