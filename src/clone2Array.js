export default function cloneArray(arr){
	let newArr = [...arr];
	newArr.forEach((item, index)=>{
		newArr[index] = [...item];
	})
	return newArr;
}
