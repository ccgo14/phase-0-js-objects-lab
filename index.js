//Write your code here

// Task 2: Declare and Initialize an Attendee Object
const attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

// Task 3: Create a Function to Log Attendee Name
function logAttendeeName(attendeeObj) {
    console.log(attendeeObj.name);
}

// Task 4: Create a Function to Log Ticket Price
function logTicketPrice(attendeeObj) {
    console.log(attendeeObj.ticketPrice);
}

// Task 5: Create a Function to Update Ticket Type
function updateTicketType(attendeeObj, newType) {
    attendeeObj.ticketType = newType;
}

// Task 6: Create a Function to Update Ticket Price
function updateTicketPrice(attendeeObj, newPrice) {
    attendeeObj.ticketPrice = newPrice;
}

// Task 7: Create a Function to Remove the Event Property
function removeEventProperty(attendeeObj) {
    delete attendeeObj.event;
}

// Task 8: Create a Function to Add a Checked-in Property
function addCheckedInProperty(attendeeObj) {
    attendeeObj.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};