
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;

  this.toString = "I am a car.  I have " + this.wheels + " wheel(s), " + this.engines + " engine(s), and " + this.seats + " seat(s).";


};

// Only change code below this line.

var myCar = new Car();
myCar.nickname = "Liz";
print("Yo!");

print (myCar.toString);

