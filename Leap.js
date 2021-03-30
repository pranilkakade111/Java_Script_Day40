const prompt=require('prompt-sync')({sigint:true});
let num= prompt('Enter the year=');
num=Number(num);

if(num%4==0)
{
    if(num%100 !=0)
    {
        console.log( " Entered  number " +num+ " is leap year ");
    }
    else
    {
       if(num%400==0)
       
       console.log("entered number " +num+ " is leap year");
    }
}
else
{
    console.log( " Entered number " +num+ "  is not leap year ");

}