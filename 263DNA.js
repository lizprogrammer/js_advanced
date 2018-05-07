function pairElement(str) {

    var dnaPairs = [];
    var elements = str.split("");
    var myBuddy = '';

    for(var i = 0; i < elements.length; i++){
        switch(elements[i]) {
    case 'A':
        myBuddy = 'T';
        break;
    case 'T':
        myBuddy = 'A';
        break;
    case 'C':
        myBuddy = 'G';
        break;
    case 'G':
        myBuddy = 'C';
        break;
    default:
        myBuddy = 'B';
    }


        dnaPairs.push([elements[i], myBuddy]);

    }

    return dnaPairs;
}

myAns = pairElement("GCG");
console.log(myAns);
//[["G", "C"], ["C","G"],["G", "C"]]
/*
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].*/



