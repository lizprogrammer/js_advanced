function pairElement(str) {

    var dnaPairs = [];
    var elements = str.split("");

    for(var i = 0; i < elements.length; i++)
        for(var j = 0; j < elements[i].length; j++)
            console.log(elements[i]);

    return str;
}

pairElement("GCG");

//[["G", "C"], ["C","G"],["G", "C"]]

