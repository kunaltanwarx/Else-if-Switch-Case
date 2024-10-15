//Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.//

let hrs = "  ";
if (hrs >= 12 && hrs <= 11.59) {
  console.log("Good Morning");
} else if (hrs >= 12 && hrs <= 17) {
  console.log("Good Afternoon");
} else if (hrs >= 17 && hrs <= 24) {
  console.log("Good Evening");
} else {
  console.log("Invalid hrs");
}
