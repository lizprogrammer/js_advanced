function largestOfFour(arr){

    for (i = 0; i < arr.length; i++){
    arr[i].sort(function(a,b){
        return b - a;
    });

    }

    //You can do this!
    return [arr[0][0],arr[1][0],arr[2][0],arr[3][0]];

}

theLargest = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
print(theLargest);
