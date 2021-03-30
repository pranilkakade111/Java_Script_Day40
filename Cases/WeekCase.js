const prompt = require('prompt-sync')({sigint: true}); 

let num  = prompt('ENTER THE DAY OF NUMBER AS PER WEEK : ');
num=Number(num);

switch(num){

case 1:
    console.log("MONDAY");
    break;

case 2:
  console.log("TUESDAY");
  break;


case 3:
    console.log("WEDNESDAY");
     break;
    

case 4:
    console.log("THRUSDAY");
    break;


case 5:
    console.log("FRIDAY");
    break;

case 6:
    console.log("SATURDAY");
    break;

case 7:
     console.log("SUNDAY");
    break;

default:
    console.log("INVALID NUMBER OF THE DAY");
    break;
}