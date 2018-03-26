function reverseString(str) {
   n = str.length - 1; // 5
   x = str[n]; // last character

   while (n > 0) {
     n--;
    x += str[n];
    }

  return x;
}

newString = reverseString("hello");
print(newString);


//hello
//olleh

//str[4]+str[3]+str[2]+str[1]+str[0];
