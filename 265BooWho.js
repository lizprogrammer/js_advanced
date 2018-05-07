
function booWho(bool) {
  if((bool == true || bool == false) && bool !== 1)
    bool = true;
  else
    bool = false;
  // What is the new fad diet for ghost developers? The Boolean.
  return bool;
}

console.log(booWho(true));
