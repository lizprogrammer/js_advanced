function oddEven(num){
	myAns = '';

	num = Math.floor(num);

	if (isNaN(num))
		return "not a";

	if(num%2 ==0)
		myAns = 'an even'
		else myAns = 'an odd';
	return myAns;	
}

print("Enter a number: ")
var n1 = readline();
print("This is " , oddEven(n1), " number.");



