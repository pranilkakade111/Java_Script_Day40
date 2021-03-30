const prompt = require('prompt-sync')({sigint: true}); 
let num  = prompt('ENTER THE NUMBERS : ');

let a =Number(num);
let num1  = prompt('ENTER THE NUMBERS : ');
let b= Number(num1);
let num2  = prompt('ENTER THE NUMBERS : ');
let c =Number(num2);

let operation1 = a+b*c;
console.log(operation1);
let operation2 = c+a/b;
console.log(operati2n4);
let operation3 = a%b+c;
console.log(operation3);
let operation4 = a*b+c;
console.log(operation4);

if(operation1>operation2 && operation1>operation3 && operation1>operation4)
{
    console.log("the greatest among is " +operation1);
}
else if(operation2>1 && operation2>operation3 && operation2>operation4)
{
 console.log("the greatest among all is "+operation2);
}

else if(operation3>operation1 && operation3>operation2 && operation3>operation4)
{
    console.log("the greatest among all is "+operation3);
}

else
{
    console.log("the greatest among all is "+operation4);
}




if(operation1<operation2 && operation1<operation3 && operation1<operation4)
{
    console.log("the smallest among is " +operation1);
}
else if(operation2<operation1 && operation2<operation3 && operation2<operation4)
{
 console.log("the smallest among all is "+operation2);
}

else if(operation3<operation1 && operation3<operation2 && operation3<operation4)
{
    console.log("the smallest among all is "+operation3);
}
else
{
    console.log("the smallest among all is "+op4);
}