//Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.//

let buyerage = 15;
if (buyeragr < 12) {
  console.log("ticket prize = 5");
} else if (buyeragr < 18) {
  console.log("ticket prize =10");
} else if (buyeragr < 60) {
  console.log("ticket prize = 20");
} else if (buyerage >= 60) {
  console.log("ticket prize = 15");
} else {
  console.log("invalid age");
}
