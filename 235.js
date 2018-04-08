
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  //arr.sort();

  num = arr.indexOf(num);

    print(arr);

  return num;
}


var ans = getIndexToIns([3, 10, 5], 3);

print(ans);