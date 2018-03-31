
function mutation(arr) {



 test1 = arr[0].toLowerCase();
 test2 = arr[1].toLowerCase();

 var i = 0;

 while(i < test2.length){
   if (test1.indexOf(test2[i]) == -1)
     return false;
   i++;

 }

 return true;
}


var ans = mutation(["hello", "hey"]);
print(ans);