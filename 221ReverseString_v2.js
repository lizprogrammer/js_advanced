function reverseString(str) {
  var strArr = str.split("");
    strArr = strArr.reverse();
    str = strArr.join("");
  return str;
}

var newString = reverseString("hello");
print (newString);
