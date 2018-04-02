
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  for(i in arr)
    print(i);
  return arr;
}

bouncer([7, "ate", "", false, 9]);