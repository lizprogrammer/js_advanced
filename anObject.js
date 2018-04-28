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
    1: { rentalClass: "sedan", rentalPrice: 5.00, rentalAvailable: true,


    },
    2: { rentalClass: "suv", rentalPrice: 5.00, rentalAvailable: true,


    },
    3: { rentalClass: "sedan", rentalPrice: 5.00, rentalAvailable: true,


    },

   submitRentalRequest: function(id)
    {
    if (this[id].rentalAvailable == true)
    {
        print("Rental car successfully reserved");
        this[id].rentalAvailable = false;
    }
    else
    {
        print("Sorry that car is not available");
    }

    },
};





print(rental[1]);

print(rental[1].rentalClass);

print(rental[1].rentalAvailable);


rental.submitRentalRequest(1);
print(rental[1].rentalAvailable);
rental.submitRentalRequest(1);

