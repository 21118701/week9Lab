window.addEventListener("DOMContentLoaded", init);

function init(){
	let btn = document.getElementById("btn");
	btn.addEventListener("click", lyric);
}



function lyric(){
	let para = document.getElementById("lyrics");
	for(let i = 99; i >= 0; i--){
		if(i === 0){
			para.innerHTML+="No more bottles of beer on the wall, no more bottles of beer<br/>Go to the store and buy some more, 99 bottles of beer on the wall";
		} else if(i === 1){
			para.innerHTML+=i + " bottle of beer on the wall, " + i + "bottle of beer" + "<br/>Take one down and pass it around, no more bottles of beer on the wall<br/><br/>";
		} else if(i === 2){
			para.innerHTML+=i + " bottles of beer on the wall, " + i + " bottles of beer" + "<br/>Take one down and pass it around, 1 bottle of beer on the wall<br/><br/>";
		} else{
			para.innerHTML+=i + " bottles of beer on the wall, " + i + " bottles of beer" + "<br/>Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall<br/><br/>";
		}
	}
}