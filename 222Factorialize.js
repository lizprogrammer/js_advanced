




function factorialize(num) {
var n = 0;
var ans = 1;
   while (n < num) {
     n++;
     print(n);
    ans *= n;
    }
  return ans;
}

newNum = factorialize(10);
print(newNum);
