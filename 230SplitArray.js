function chunkArrayInGroups(arr, size) {
  // Break it up.


    var newArray = [];
    var n = 0;

    while (n < arr.length ) {
    newArray.push(arr.slice(n,n+size))
        n += size;

    }

    print(newArray);
   return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
//should return [[0, 1, 2], [3, 4, 5], [6]].

