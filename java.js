function calculateInsurance() {

var Name = document.getElementById("name").value;
var Age = document.getElementById("age").value;
var Country = document.getElementById("country").value;
var hpower = document.getElementById("horsepower").value;


var formelcalc = hpower * 100 / Age +150;
var inPrice = (Math.round(formelcalc *100)/100).toFixed(2);


if(Name == 0) {
	document.getElementById("price").innerHTML = "Please enter your Name";
} else if(Age <12) {
	document.getElementById("price").innerHTML = "Please enter  the correct Age"; 
} else if(hpower <50) {
	document.getElementById("price").innerHTML = "Please enter the horsepower of your Car";
} else {
document.getElementById("price").innerHTML = "Your car insurance with " + hpower + " Horse power will be " + inPrice + "€ per year.";
}

}
