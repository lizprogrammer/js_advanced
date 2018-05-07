function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
    hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
};

function fearNotLetter2(str) {
    var strAlphabet = "abcdefghijklmnopqrstuvwxyz";

    var startLetter = str[0];
    var endLetter = str[str.length - 1];

    if (startLetter != "a")
        return undefined;

    var endIndex = strAlphabet.indexOf(endLetter);

    strAlphabet = strAlphabet.substring(0,endIndex + 1);
    var winners = "";

    for(var i = 0; i < strAlphabet.length; i++)
        //print(args[i][j]);
        if(strAlphabet[i] != str[i])
            {
                winners += strAlphabet[i];
                str = str.substring(0,i) + ' ' + str.substring(i,str.length);

                //console.log(str);

            }
  return winners;

};

// test here
console.log(fearNotLetter("abcdefghjklmno") == fearNotLetter2("abcdefghjklmno"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter2("abcdefghjklmno"));

//fearNotLetter("abcdefghjklmno")