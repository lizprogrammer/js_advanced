/*Assignment-thon Version 1.0 (30 minutes)

Javascript object for a car dealership

3 car categories: sedan, suv, sports
rental price for each
available or not

total num available for each category
ability to submit a rental request

development done locally, or in c9, testing in browser console or c9 console only. Push to github. Branch “assignment-thon01-0”*/
  /* submitRentalRequest (id, prop)
   if (this[prop].available == true)
            this[prop].available = false;
*/

var rental = {
    rentalClass: "sedan", rentalPrice: 5.00, rentalAvailable: true,



    toString: function(){
        return this.rentalClass +  ", " + this.rentalPrice + ", " + this.rentalAvailable;
    },

    setRentalClass: function(c)
    {
        this.rentalClass = c;
    },

    getRentalClass: function()
    {
        return this.rentalClass;
    },

    setRentalPrice: function(p) //true or false
    {
        this.rentalPrice = p;
    },

    getRentalPrice: function(){
        return this.rentalPrice;
    },

    setRentalAvailable: function(a) //true or false
    {
        this.rentalAvailable = a;
    },

    getRentalAvailable: function(){
        return this.rentalAvailable;
    },



   submitRentalRequest: function()
    {
    if (this.rentalAvailable == true)
    {
        print("Rental car successfully reserved");
        this.rentalAvailable = false;
    }
    else
    {
        print("Sorry that car is not available");
    }

    },
};


var myRental = rental;

myRental.setRentalPrice(500.00);
myRental.setRentalAvailable(true);
myRental.setRentalClass("Mercedes");
print(myRental.toString());

myRental.submitRentalRequest();
print(myRental.rentalAvailable);
myRental.submitRentalRequest();

