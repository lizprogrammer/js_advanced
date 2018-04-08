
function getIndexToIns(arr, num) {

  // Find my place in this sorted array.
  var sorted = arr.sort(function(a, b){
  return a - b;
    });

    var i;
    for (i = 0; i < arr.length; i++)
    {print(arr[i])
        if(arr[i] >= num)
            return i;
    }
    return i;
}


var newArr = getIndexToIns([5, 3, 20, 3], 5);
//3,3,5,20
print (newArr);



/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and
19 is less than 20 (index 2) and greater than 5 (index 1).*/
