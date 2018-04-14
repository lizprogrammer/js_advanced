
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  for(var words in collection)
  {
    if(source.last==collection[words].last)
        arr.push(collection[words]);

  }

  
  // Only change code above this line
  return arr;
}


var ans = whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
//print(ans.toSource());

print(ans[0]["a"]);
print(Object.keys(ans[0]));

