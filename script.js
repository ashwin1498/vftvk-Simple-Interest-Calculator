function DisplayMessage() 
{
	document.getElementById("result").style.display = "block";
};
function compute()
{
    var principal = document.getElementById("principal").value;
	if(parseInt(principal) < 1) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
	}


	var rate = document.getElementById("rate").value;
    if(parseInt(rate) < 1) {
		alert("Enter a positive number");
		return;
	}
	var years = document.getElementById("years").value;
    if(parseInt(years ) < 1) {
		alert("Enter a positive number");
		return;
	}

	var interest = principal * years * rate / 100;

	var today = new Date();
	var yearOfWithdrawal = parseInt(today.getFullYear())+parseInt(years);

	document.getElementById("depositmessage").innerHTML = ""+principal;
	document.getElementById("interestmessage").innerHTML = ""+rate;
	document.getElementById("amountmessage").innerHTML = ""+interest;
	document.getElementById("yearmessage").innerHTML = ""+yearOfWithdrawal;
	DisplayMessage();

	return false;
    
}
function showRange() {
	var rate = document.getElementById("rate").value;
	document.getElementById("ratevalue").innerHTML = rate;
}
        
