
function diffArray(arr1, arr2) {
  var newArr = [];




  for(i = 0; i < arr1.length; i++)
    {
        for(j = 0; j < arr2.length; j++)
        {
            if(arr1[i] == arr2[j])
            {
                arr1.splice(i, 1);
                arr2.splice(j, 1);
                i--;
                j--;

            }

        }

    }

  // Same, same; but different.
  return arr1.concat(arr2);
}


var myAns = diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);


print(myAns);