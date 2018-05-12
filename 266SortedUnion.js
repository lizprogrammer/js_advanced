
function uniteUnique(arr) {



  arr = arr.join(',');
  //console.log(arr);

  var myArray = [];
  var winners = [];
  var testValue = '';

  for(var i = 0; i < arr.length; i++)
  {
    myArray.push(arr[i]);

  }

  //console.log(myArray);

  for(var i = 0; i < myArray.length; i++)
  {
    testValue = myArray.shift();
    if(myArray.indexOf(testValue) < 1)
      winners.push(testValue);
  }

  //console.log(winners);

  return winners;
}

var myArray = [[1, 3, 2], [5, 2, 1, 4], [2, 1]];

console.log(uniteUnique(myArray));
//console.log(uniteUnique(myArray));



/*
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/
