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

        this.bookings.forEach(item => {
          if(item.checkIn.getTime() <= date1.getTime()){
                return occupied = true;
              }
          else if(item.checkOut.getTime()>= date1.getTime()){
                return occupied = true;
              }
              else{
                return occupied = false;
              }
        })
        return occupied;   
    }
    occupancyPercentage(startDate, endDate){
      startDate = new Date(startDate);
      endDate = new Date(endDate);
    
      let totalTimeResearch = (endDate - startDate) / (24 * 60 * 60 * 1000);
      let occupiedDays = 0;
    
      this.bookings.forEach(item => {
        const bookingStart = new Date(item.checkIn);
        const bookingEnd = new Date(item.checkOut);
    
        if (bookingStart <= endDate && bookingEnd >= startDate) {
          const overlapStart = bookingStart < startDate ? startDate : bookingStart;
          const overlapEnd = bookingEnd > endDate ? endDate : bookingEnd;
          occupiedDays += (overlapEnd - overlapStart) / (24 * 60 * 60 * 1000);
        }
      });
    
      const occupancyPercentage = (occupiedDays / totalTimeResearch) * 100;
    
      return Number(occupancyPercentage.toFixed(2));
  }

    static totalOccupancyPercentage(rooms, startDate, endDate){
       return false;
    }
    static availableRooms(rooms, startDate, endDate) {
        return false;
    }
}

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