const prompt = require('prompt-sync')({sigint: true}); 

let number  = prompt('ENTER THE NUMBER : ');
number=Number(number);

if(number==1)
{
    console.log("1 is present in unit place if number "+number);
}

else if(number==10)
{
    console.log("1 is present in ten place and 0 is present is unit place value of number "+number);
}

else if(number==100)
{
    console.log("1 is present in hundreds place value ,0 is present in both ten^th and unit place value of number" +number);
}

else if(number==1000)
{
    console.log("1 is present in thousendth place and 0 is present in all the hundre^th ten^th and unit place "+number);
}

else 
{
    console.log("number is not among this number");
}