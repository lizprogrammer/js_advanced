
function reverseString(str) {

  var strArr = str.split("");

    strArr = strArr.reverse();
    str = strArr.join("");
  return str;
}

function palindrome(str) {
  // Good luck!


  var rev = reverseString(str).toLowerCase();
  str = str.toLowerCase();

  if(rev.replace(/[^0-9a-z]/gi, '') == str.replace(/[^0-9a-z]/gi, ''))
  return true;
  else
  return false;

}

ans = palindrome("yesey");
print (ans);