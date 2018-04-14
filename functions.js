function odd (){

	var one = 1;
	var three = 3;
	var five = 5;

	return one + three + five;
	/*for (i = 1; i< num; i += 2)
		print(i);*/

}


function even (){

	var two = 2;
	var four = 4;
	var six = 6;

	return two + four + six;

	//var sumEven = two + four + six;
	//return sumEven;

	/*for (i = 0; i< num; i += 2)
		print(i);*/


}

function tenTwenty(){
	var ans = [10, 20];
	return ans;
}

function thirtyForty(){
	var ans = [30,40];
	return ans;
}

var hundred = 100;
var twoHundred = 200;
var ten = 10;
var eleven = 11;

var grandTotal = tenTwenty()[0] + tenTwenty()[1] + thirtyForty()[0] + thirtyForty()[1] + hundred + twoHundred;
//print grandTotal;



var grandTotal = odd() + even() + ten + eleven;
print(grandTotal);
