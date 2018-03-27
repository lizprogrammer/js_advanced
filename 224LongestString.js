
function findLongestWord(str) {
    strArray = str.split(' ');


    count = 0;
    max = 0;


   while (count < strArray.length)
   {

      if(strArray[count].length > strArray[max].length)
      {
        max = count;
      }
      count++;
    }

  return strArray[max].length;
}

myStr = "What is the average airspeed velocity of an unladen swallow"
myIndex = findLongestWord(myStr);

print (myIndex);

//print(myStr.split('')[myIndex])
