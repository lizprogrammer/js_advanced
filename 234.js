function destroyer(arr) {

  var args = array.from(arguments);
  
  var result = args.shift().filter(function (value) {
    if (args.indexOf(value) < 0) {
      return true;
    }
  });
  
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
