window.addEventListener("DOMContentLoaded", rps);

function rps(){
	let para = document.getElementById("result");
	alert("Choose Rock, Paper or Scissors when asked!");
	let result;
	let compArray = ["rock", "paper", "scissors"];
	let counter = 0;
	for(let i = 0; i < 3; i++){
		let compChoice = compArray[parseInt(Math.random()*3)];
		let playerChoice = prompt("Choice: ");
		counter++;
		if((playerChoice !== "rock") && (playerChoice !== "paper") && (playerChoice !== "scissors")){
			result="Invalid";
			para.innerHTML=result;
		} else if(playerChoice === compChoice){
			result="Draw!";
		} else {
			if(playerChoice === "rock"){
				if(compChoice === "scissors"){
					result="Win!";
					para.innerHTML=result + " Game Finished!";
					break;
				} else {
					result="Lose!";
					para.innerHTML=result;
				}
			} else if(playerChoice === "paper"){
				if(compChoice === "rock"){
					result="Win!";
					para.innerHTML=result + " Game Finished!";
					break;
				} else {
					result="Lose!";
					para.innerHTML=result;
				}
			} else if(playerChoice === "scissors"){
				if(compChoice === "paper"){
					result="Win!";
					para.innerHTML=result + " Game Finished!";
					break;
				} else {
					result="Lose!";
					para.innerHTML=result;
				}
			}
		}
	}
	if(counter===3){
		para.innerHTML="Game finished, result: you " + result;
	}
}