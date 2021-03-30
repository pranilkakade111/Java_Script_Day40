const prompt = require('prompt-sync')({sigint: true}); 

let num1  = prompt('enter the  number : ');
num1=Number(num1);

let result = isPalindrom(num1);
console.log(result);

function isPrime(_any)
{
    var i;
    let count =1;
    if(num1===1)
    {
        console.log(num1+ " is neither prime nor composit");
    }
    
    else if(num1>1)
    {
    for(i=1  ;i<num1 ;i++)
    {
        if(num1%i==0)
        {
            count++;
        }
    }
    
    if(count==2)
    {
        console.log(num1+ " is a prime number")
    }
    else
    {
        console.log(num1+ " is a composit number");
    }
    }
}

function isPalindrom(num1)
{
    var r=0;
    var sum=0;
    var temp1=num1;

    while(num1>0)
    {
       r = num1%10;
       sum= (sum*10)+r;
       num1= parseInt(num1/10);
    }

    if(temp1==sum)
    {
        console.log(temp1+ " is palindrom");
        var primeresult = isPrime(temp1);
    }
    else
    {
        console.log(temp1+ " is not palindrom");
    }
}