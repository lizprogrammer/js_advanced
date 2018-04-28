function sym(a) {

    args = Array.prototype.slice.call(arguments);


    var winners = [];

    //print(args);

    for(var i = 0; i < args.length; i++)
    {
        args[i].sort();
        print(args[i]);

        for(var j = 0; j < args[i].length; j++)
        //print(args[i][j]);

        if(args[i].indexOf(args[i][j]) >=1)
            {
                winners.push(args[i][j]);
            }
    }

    //print(winners);

  return args;
}

sym([1, 2, 5], [2, 3, 5], [4, 3, 5]);
