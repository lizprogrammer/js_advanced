function repeatStringNumTimes(str, num) {
  // repeat after me
  var myStr = '';

  for (var i = 0; i < num; i++) {
   myStr += str;
   // more statements
}

  return myStr;
}

var repeater = repeatStringNumTimes("abc", 3);

print(repeater);