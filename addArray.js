

function sumAll(arr) {

  var mySum = 0;

  var myMin = Math.min(arr[0],arr[1]);
  var myMax = Math.max(arr[0],arr[1]);


  for(i = myMin; i <= myMax; i++){
    mySum += i;
  }


  return mySum;
}

sumAll([1, 4]);

