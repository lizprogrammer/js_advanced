function truncateString(str, num) {
  // Clear out that junk in your trunk


/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.*/
 var endIndex;
 var endIndex;

    if (str.length > 3 && num > 3)
        endIndex = num-3;
    else
        endIndex = num;

    if(str.length > num + 3 || str.length > num)
        str = str.slice(0,endIndex) + "...";

 return str;

}
myStr = truncateString("A-tisket a-tasket A green and yellow basket", 11);

print(myStr);

myStr = truncateString("Peter Piper picked a peck of pickled peppers", 14);

print(myStr);

myStr = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

print(myStr);

myStr = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);

print(myStr);
myStr = truncateString("A-", 1);

print(myStr);

myStr = truncateString("Absolutely Longer", 2);

print(myStr);



/*

truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) should return "A...".
truncateString("Absolutely Longer", 2) should return "Ab...".*/

