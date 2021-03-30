const prompt = require('prompt-sync')({sigint: true}); 
let num  = prompt('ENTER THE nth NUMBER : ');
num = Number(num);

let i;
let a =0.0;
for(i=1 ;i<=num; i++)
{
    a=a+1/i;
}
console.log("the " +num+ "th harmonic series is "+a);