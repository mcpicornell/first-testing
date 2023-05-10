const date1 = new Date("2023-01-01") ;
const date2 = new Date ("2023-02-01") ;

let totalTime =  date2.getTime() - date1.getTime();

totalDaysOccupied = totalTime / (24*60*60*1000);


class Room {
    constructor(name, bookings, rate, discount) {
      this.name = name; //string
      this.bookings = bookings; //Array of booking
      this.rate = rate; //Int price in cents
      this.discount = discount; //int in percentage
    }
    isOccupied(date){
      const date1 = new Date(date);
      let occupied;
        // for(let i=0; i < this.bookings[i].length ;i++){
        //   if(this.bookings[i].checkIn.getTime()=== date1.getTime()){
        //     occupied = true;
        //   }
        //   else{
        //     occupied = false;
        //   }
          
        // }
        this.bookings.forEach(item => {
          console.log(item.checkIn.getTime())
          console.log(date1.getTime())
          if(item.checkIn.getTime() <= date1.getTime()){
                occupied = true;
              }
          else if(item.checkOut.getTime()>= date1.getTime()){
                occupied = true;
              }
              else{
                occupied = false;
              }
        })
        return occupied;   
    }
    occupancyPercentage(startDate, endDate){
        return false;
    }
    static totalOccupancyPercentage(rooms, startDate, endDate){
       return false;
    }
    static availableRooms(rooms, startDate, endDate) {
        return false;
    }
}

// Methods:
// isOccupied(date) returns false if not occupied, returns true if occupied
// occupancyPercentage(startDate, endDate) returns the percentage of days with occupancy within the range of dates provided (inclusive)

// Static methods:
// totalOccupancyPercentage(rooms, startDate, endDate) returns the total occupancy percentage across all rooms in the array
// availableRooms(rooms, startDate, endDate) returns an array of all rooms in the array that are not occupied for the entire duration


class Booking {
    constructor(name, email, checkIn, checkOut, discount, room) {
      this.name = name; //string
      this.email = email; //string
      this.checkIn = checkIn; //date
      this.checkOut = checkOut; //date
      this.discount = discount; //int in percentage
      this.room = room; //a room object
    }
    getFee(firstDiscount, rate, secondDiscount, checkIn, checkOut){
        const checkInMs = checkIn.getTime();
        const checkOutMs = checkOut.getTime();

        let totalTime = checkOutMs - checkInMs;

        totalTime = totalTime / (24*60*60*1000);

        const firstDiscountApplied = rate - ((firstDiscount/100) * rate);
        const totalDaysWithDiscount = firstDiscountApplied * totalTime;
        const secondDiscountApplied = totalDaysWithDiscount -((secondDiscount/100) * totalDaysWithDiscount);
        return Number(secondDiscountApplied.toFixed(2));
    }
  }

  module.exports = {
    Room ,
    Booking
}