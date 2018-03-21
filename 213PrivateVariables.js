
var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };

  this.toString = function(){
    return "I am a car!  My speed is " + speed + " miles per hour.";
  }
};

var Bike = function() {

  // Only change code below this line.
  var gear = 5;

  this.getGear(){
    return gear;
  }
  this.setGear = function(g)
  {
    this.gear = g;
  }
    this.toString = function(){
    return "I am a bike!  I have " + this.gear + "gear(s).";
  }
};

var myCar = new Car();

var myBike = new Bike();

print(myCar.toString);
print(myBike.toString);