
function slasher(arr, howMany) {
  // it doesn't always pay to be first

  var myArray = [];

  myArray = arr.slice(howMany, arr.length);

  return myArray;
}

myNew = slasher([1, 2, 3], 2);
print (myNew);
