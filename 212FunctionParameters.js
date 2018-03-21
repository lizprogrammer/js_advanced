var Car = function(wheels, seats, engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
  this.toString = "I am a car.  I have " + this.wheels + " wheel(s), " + this.engines + " engine(s), and " + this.seats + " seat(s).";

};

//Try it out here
var myCar = new Car(30,10,20);
print(myCar.toString)