function confirmEnding(str, target) {
  // "Never give up and good luck will find you."

  var start = str.length - target.length;
  var fin = str.length;

  var yoLo = str.substr(start,fin);
  if (yoLo == target){
  return true;
  }
  return false;
  // -- Falcor

}

var ans = confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
print (ans);

