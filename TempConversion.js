const prompt = require('prompt-sync')({sigint: true}); 
let isExit =true;
console.log("1= celsius to farahniet");
console.log("2= degreeF to degreeC");
console.log("3= Exit");

let num  = prompt('enter the choice of conversion : ');
num=Number(num);

function degreeCTOdegreeF(degree_celsius)
{
     let degreeF = (degree_celsius * 9/5) + 32;
     console.log(degree_celsius+ " degreeCelcius  to " +degreeF+ " degreeFarahniet");
}

function degreeFTOdegreeC(degree_faranheits)
{
     let degreeC =(degree_faranheits -32) * 5/9;
     console.log(degree_faranheits+ " degreeFaraniet  to " +degreeC+ " degreeCelsius");
}
function isExitCondition()
{
    isExit=false;
}

switch(num)
{
case 1:

    let degree_celsius= prompt("enter the tempratue in degree celcius :");
    degree_celsius=Number(degree_celsius);
    let result = degreeCTOdegreeF(degree_celsius);
    break;

case 2:

    let degree_faranheits= prompt("enter the tempratue in degree faranhrit : ");
    degree_faranheit=Number(degree_faranheits);
    let result1 = degreeFTOdegreeC(degree_faranheits);
    break;

case 3 :

     isExitCondition();
     break;
   
default :
   console.log("invalid input forcoversion");
   break;     
}