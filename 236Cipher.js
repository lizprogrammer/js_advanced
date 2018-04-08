function rot13(str) { // LBH QVQ VG!
    var newIndex = 0;
    var oldIndex = 0;
    var oldLetter = '';
    var newLetter = '';

    var theLetterA = "A";

    var minAlph = theLetterA.charCodeAt(0);
    var maxAlph = minAlph + 25;

    var newStr = '' ;//String.fromCharCode(minAlph);


    for (i = 0; i < str.length; i++)
    {

        oldIndex = str.charCodeAt(i);
        oldLetter = str[i];

        if (str.charCodeAt(i) < minAlph || str.charCodeAt(i) > maxAlph){
            newIndex = str.charCodeAt(i);

        }
        else {
            if ((oldIndex + 13) > maxAlph)
                newIndex = minAlph + ((oldIndex + 12)- maxAlph);
            else
                newIndex =  oldIndex + 13;
        }

        newLetter = String.fromCharCode(newIndex);
        newStr += newLetter;


    }

  return newStr;
}

// Change the inputs below to test
print(rot13("SERR PBQR PNZC!"));


