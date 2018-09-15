// Part 1

// Part 2
/*
var temp = prompt("Please enter temperature");
var tempUnit = prompt("Please enter temperature unit (C, F, or K");

if(tempUnit === "F") {
	var tempF = parseInt(temp);
	var tempC = (tempF - 32) / 1.8;
	var tempK = tempC + 273.15;
	alert(tempF.toFIxed(2) + "F = " + tempC.toFIxed(2) + "C = " + tempK.toFIxed(2) + "K");
} else if(tempUnit === "C") {
	var tempC = parseInt(temp);
	var tempF = tempC * 1.8 + 32;
	var tempK = tempC + 273.15;
	alert(tempF.toFIxed(2) + "F = " + tempC.toFIxed(2) + "C = " + tempK.toFIxed(2) + "K");
} else if(tempUnit === "K") {
	var tempK = parseInt(temp);
	var tempC = (tempK - 273.15);
	var tempF = tempC * 1.8 + 32;
	alert(tempF.toFIxed(2) + "F = " + tempC.toFIxed(2) + "C = " + tempK.toFIxed(2) + "K");
};
*/

// Part 3
/*
var temps = [tempC, tempF, tempK];
var units = ["C", "F", "K"];
console.log(temps);
*/

// Part 4
/*
if(tempC < 0) {
	alert("ooh it's cold out");
} else if(tempC > 40 && tempC <= 100) {
	alert("ooh it's hot out");
} else if(tempC > 100) {
	alert("you're literally boiling");
};
*/

// Part 5
/*
var name = prompt("Please enter your name");
if(tempC < 0) {
	alert("ooh it's cold out. do put on a heavy jacket, " + name);
} else if(tempC > 40 && tempC <= 100) {
	alert("ooh it's hot out. into your shorts and shirt, " + name);
} else if(tempC > 100) {
	alert("you're literally boiling. don't go outside if you wanna live, " + name);
};
*/

// Part 6
/*
for(var i = 0; i < temps.length; i++) {
	console.log("Temp:" + temps[i] + " " + units[i]);
};
*/

// Part 7
while(temp !== "STOP") {
var temp = prompt("Please enter temperature (enter STOP to end)");

if(temp === "STOP") {
	alert("Thank you for playing");
} else 
var tempUnit = prompt("Please enter temperature unit (C, F, or K)");

if(tempUnit === "F") {
	var tempF = parseInt(temp);
	var tempC = (tempF - 32) / 1.8;
	var tempK = tempC + 273.15;
	alert(tempF.toFixed(2) + "F = " + tempC.toFixed(2) + "C = " + tempK.toFixed(2) + "K");
} else if(tempUnit === "C") {
	var tempC = parseInt(temp);
	var tempF = tempC * 1.8 + 32;
	var tempK = tempC + 273.15;
	alert(tempF.toFixed(2) + "F = " + tempC.toFixed(2) + "C = " + tempK.toFixed(2) + "K");
} else if(tempUnit === "K") {
	var tempK = parseInt(temp);
	var tempC = (tempK - 273.15);
	var tempF = tempC * 1.8 + 32;
	alert(tempF.toFixed(2) + "F = " + tempC.toFixed(2) + "C = " + tempK.toFixed(2) + "K");
}
};