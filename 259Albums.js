
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }




};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

 var myObj = collection[id];

  if(myObj[prop] == undefined && prop == "tracks")
  {

    var newArray = [];
    newArray.push(value);
    myObj[prop] = newArray;

   }
    else if (myObj[prop] == undefined)
   {
     myObj[prop] = value;
   }
    else if (value.length == 0)
   {
     delete myObj[prop];
   }
    else
   {
     myObj[prop].push(value);
   }

    collection[id] = myObj;

  return collection;

}

// Alter values below to test your code
var myRecord = updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me")
updateRecords(2548, "tracks", "");