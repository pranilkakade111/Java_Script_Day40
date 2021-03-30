const prompt = require('prompt-sync')({sigint: true}); 

let number = prompt('ENTER THE NUMBER AS PER DAY IN WEEK : ');
number=Number(number);

if(number==1)
{
    console.log("MONDAY");
}

else if(number==2)
{
    console.log("TUESDAY");
}

else if(number==3)
{
    console.log("WEDNESDAY");
}

else if(number==4)
{
    console.log("THURSDAY");
}

else if(number==5)
{
    console.log("FRIDAY");
}

else if(number==6)
{
    console.log("SATURDAY");
}

else if(number==7)
{
    console.log("SUNDAY");
}

else
{
    console.log("invalid Number");
}