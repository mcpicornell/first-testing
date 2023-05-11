const {Room, Booking} = require('./index');

const roomSuite = new Room (
    "Suite",
    [],
    400.05,
    20
);

const roomDoubleBed = new Room (
    "Double Bed",
    [],
    200.05,
    40
);

const booking1 = new Booking (
    "Joselito",
    "joselito@gmail.com",
    new Date("2023-01-01"),
    new Date("2023-02-01"),
    10,
    roomSuite,
);

roomSuite.bookings = [booking1];

const booking2 = new Booking (
    "Paquito",
    "paquito@gmail.com",
    new Date("2023-01-01"),
    new Date("2023-02-16"),
    10,
    roomDoubleBed,
);

const booking3 = new Booking (
    "Margarita",
    "margarita@gmail.com",
    new Date("2023-02-17"),
    new Date ("2023-02-22"),
    10,
    roomDoubleBed,
);

roomDoubleBed.bookings = [booking2, booking3];

const rooms = [roomSuite, roomDoubleBed]


//ROOM TESTS
describe("Boolean check if the room is occupied", () => {
    test("It is occupied", () => {
        expect(roomDoubleBed.isOccupied("2023-08-01")).toBe(true);
    });
});

describe("Test occupancy percentage", () => {
    test("Number is expected", () => {
        expect(roomDoubleBed.occupancyPercentage("2022-12-25", "2023-01-20")).toBe(73.08);
    });
});

describe("Total occupancy percentage", () => {
    test("Number is expected", () => {
        expect(Room.totalOccupancyPercentage(rooms, "2022-12-25", "2023-01-20")).toBe(73.08);
    });
});

describe("Total of the avaliable rooms in array", () => {
    test("Total of the avaliable rooms in array", () => {
        expect(Room.availableRooms(rooms, "2022-12-25", "2022-12-31")).toBe([roomSuite, roomDoubleBed]);
    });
});


//BOOKINGS TEST
describe("Check if the total discount on bookings is a number", () => {
    test("Check if total is greater than 0", () => {
        expect(booking1.getFee(roomSuite.discount, roomSuite.rate, booking1.discount, booking1.checkIn, booking1.checkOut)).toBeGreaterThan(0);
    });
});
