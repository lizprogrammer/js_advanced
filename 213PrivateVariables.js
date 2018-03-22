
var Car = function()
{
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change)
  {
    speed += change;
  };

  this.decelerate = function()
  {
    speed -= 5;
  };

  this.getSpeed = function()
  {
    return speed;
  };

  this.toString = function()
  {
    return "I am a car!  My speed is " + speed + " mile(s) per hour.";
  };
};

var Bike = function() {

  // Only change code below this line.
  var gear = 5;

  this.setGear = function(g){
    gear = g;
  };

  this.getGear = function(){
    return gear;
  };

  this.toString = function()
  {
  return "I am a bike!  I have " + gear + " gear(s).";
  };

};

var myCar = new Car();

var myBike = new Bike();

myBike.setGear(4);

myBike.getGear();

myBike.setGear(3);

myBike.getGear();

myBike.setGear(1);

myBike.getGear();

print(myCar.toString());
print(myBike.toString());