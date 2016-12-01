var homicidesPerYear = 874100;

var microsecondsPerYear = 365*24*60*60*1000;

var homicideInterval = microsecondsPerYear / homicidesPerYear;

var homicidesSoFar = 0;

var start = Date.now();

addHomicide();
addHomicide();
addHomicide();
addHomicide();

setInterval(addHomicide, homicideInterval);
setInterval(updateHomicideHeadline, 1000);

function addHomicide(){
	var dot = document.createElement("span");
	dot.className += "dot";
	dot.innerHTML = "<div>Africa</div>";
	document.getElementById("homicides").appendChild(dot);
	homicidesSoFar++;
	updateHomicideHeadline();
}

function updateHomicideHeadline(){
	var headline = homicidesSoFar+" cases of murder happened in the last "
	if(homicidesSoFar == 0){
		headline = "No cases of murder happened in the last "
	} else if(homicidesSoFar == 1){
		headline = homicidesSoFar+" case of murder happened in the last "
	}
	var secondPart = "";
	var timeElapsed = Date.now() - start;
	var seconds = parseInt((timeElapsed/1000)%60)
	var minutes = parseInt((timeElapsed/(1000*60))%60)
	var hours = parseInt((timeElapsed/(1000*60*60))%24);

	if(hours > 0){
		headline += hours + " hours, ";
	}
	if(minutes > 0 || hours > 0){
		headline += minutes + " minutes";
	}
	if(hours < 1){
		if(minutes > 0){
			headline+=", ";
		}
		headline += seconds + " seconds";
	}
	headline += ".";

	
	document.getElementById("homicideTitle").innerHTML = headline;
}