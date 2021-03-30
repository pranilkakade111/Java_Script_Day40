const prompt = require('prompt-sync')({sigint: true});

let number = prompt('Enter the number=');
number = new Date(number);
console.log(number);

let start=new Date(2020,02,20);
let end = new Date(2020,06,20);
console.log(start);
console.log(end);

if(number>=start && number<=end)
{
    console.log("True");
}
else
{
    console.log("False");
}