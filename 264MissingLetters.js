function fearNotLetter(str) {
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

}


console.log(fearNotLetter("abce"));// should return "d".
console.log(fearNotLetter("abcdefghjklmno")); //

console.log(fearNotLetter("bcd"));// should return undefined.
console.log(fearNotLetter("yz"));//