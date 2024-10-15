//Write a program that takes a month as input and checks: If the month is January, print "New Year's Day." If the month is February, check: If the day is 14, print Valentine's Day." Else, print "No festival." If the month is December, print "Christmas." Otherwise, print "No major festival this month."//

let month = january;
switch (month) {
  case january:
    console.log("New Year's Day");
  case february:
    console.log("No festival");
    break;
  case february && day === 14:
    console.log("Valentine's Day");
    break;
  case march:
    console.log("No festival");
    break;
  case april:
    console.log("No festival");
    break;
  case may:
    console.log("No festival");
    break;
  case june:
    console.log("No festival");
    break;
  case july:
    console.log("No festival");
    break;
  case august:
    console.log("No festival");
    break;
  case september:
    console.log("No festival");
    break;
  case october:
    console.log("No festival");
    break;
  case november:
    console.log("No festival");
    break;
  case december:
    console.log("Christmas");
    break;
  default:
    console.log("No major festival this month");
}
