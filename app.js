//Task Number one-two//
document.write("<h1>Task # 1-2 </h1>");
var num1=prompt("Enter a Number 1")
var num2=prompt("Enter a Number 2")
var sumresult=(num1 + num2);
var multiplyresult=(num1 * num2);
var subtractionresult=(num1 - num2);
var divideresult=(num1 / num2);
var modulesresult=(num1 % num2);
document.write(`Sum of ${num1} and ${num2} is ${sumresult}`);
document.write("</br>");
document.write(`Multiply of ${num1} and ${num2} is ${multiplyresult}`);
document.write("</br>");
document.write(`Subtraction of ${num1} and ${num2} is ${subtractionresult}`);
document.write("</br>");
document.write(`Divide of ${num1} and ${num2} is ${divideresult}`);
document.write("</br>");
document.write(`Modules of ${num1} and ${num2} is ${modulesresult}`);
//Task Number Three//
document.write("</br>");
document.write("<h1>Task # 3 </h1>");
var number1=(5)
document.write("Value After variable declaration is undefined");
document.write("</br>");
document.write(`Initial value: ${number1}`);
document.write("</br>");
document.write(`Value after increment: ${++number1}`);
var new1=(number1+7)
document.write("</br>");
document.write(`Value after Addition: ${new1}`);
document.write("</br>");
document.write(`Value after decrement: ${--new1}`);
document.write("</br>");
document.write(`The Remindar is : ${new1 % 6}`);
document.write("</br>");
//Task Number four//
document.write("<h1>Task # 4 </h1>");
var ticketcost=+prompt("Enter a Ticket Cost");
var totalticket=+prompt("Enter a Total Ticket Purchase");
var totalpurchase=(ticketcost * totalticket);
document.write(`Total cost buy ${ticketcost} to a movie is ${totalpurchase} PKR`)
//Task Number five//
document.write("</br>");
document.write("<h1>Task # 5 </h1>");
var table=prompt("Enter a Number for a Table");
var one     =(table * 1);
var two     =(table * 2);
var three   =(table * 3);
var four    =(table * 4);
var five    =(table * 5);
var six     =(table * 6);
var seven   =(table * 7);
var eight   =(table * 8);
var nine    =(table * 9);
var ten     =(table * 10);
document.write("</br>");
document.write(`${table} x 1 = ${one}`);
document.write("</br>");
document.write(`${table} x 2 = ${two}`);
document.write("</br>");
document.write(`${table} x 3 = ${three}`);
document.write("</br>");
document.write(`${table} x 4 = ${four}`);
document.write("</br>");
document.write(`${table} x 5 = ${five}`);
document.write("</br>");
document.write(`${table} x 6 = ${six}`);
document.write("</br>");
document.write(`${table} x 7 = ${seven}`);
document.write("</br>");
document.write(`${table} x 8 = ${eight}`);
document.write("</br>");
document.write(`${table} x 9 = ${nine}`);
document.write("</br>");
document.write(`${table} x 10 = ${ten}`);
document.write("</br>");
//Task Number Six//
document.write("</br>");
document.write("<h1>Task # 6 </h1>");
var fahrenheit=prompt("Enter a  Number to Convert Celsius to Fahrenheit");
var resultfahrenheit = (fahrenheit * 9/5) + 32;
document.write(`${fahrenheit}°C is ${resultfahrenheit}°F`);
document.write("</br>");
var fahrencelsius=prompt("Enter a  Number to Convert Fahrenheit  to Celsius ");
var resultcelsius = (fahrenheit - 32) * 5/9;
document.write(`${fahrencelsius}°F is ${resultcelsius}°C`);
//Task Number Seven//
document.write("</br>");
document.write("<h1>Task # 7 </h1>");
document.write("<h2> Shopping Cart </h2>");
var priceitemone=+prompt("Enter a Price of Prdouct One");
var quantitytemsone=+prompt("Enter a Quantity of Prdouct One");
var priceitemtwo=+prompt("Enter a Price of Prdouct Two");
var quantitytemstwo=+prompt("Enter a Quantity of Prdouct Two");
var shippingCharges=("100");
var totalcost=((priceitemone*quantitytemsone) + (priceitemtwo*quantitytemstwo) + 100);
document.write(`Price of Product One is ${priceitemone} </br>  Quantity of Product One is ${quantitytemsone} </br> Price of Product Two is ${priceitemtwo} </br> Quantity of Product One is ${quantitytemstwo} </br> Shipping Carges${shippingCharges} </br> Total Cost of Your Order is ${totalcost}`);
//Task Number Eight//
document.write("</br>");
document.write("<h1>Task # 8 </h1>");
var totalmarks=+prompt("Enter a Total Marks");
var marksobtained=+prompt("Enter a Total Mark Obtained");
var totalpercentage=(marksobtained /totalmarks *100);
document.write(`Total Marks:${totalmarks} </br> Marks Obtained:${marksobtained} </br> Percentage:${totalpercentage} %`);
//Task Number Nine//
document.write("</br>");
document.write("<h1>Task # 9 </h1>");
document.write("<h2> Currency In PKR </h2>");
var dollar=+prompt("Enter a Total US Dollar");
var riyal=+prompt("Enter a Total Saudi Riyal ");
var totalcurrency=((dollar*104.80) + (riyal*28) );
document.write(`Total Currency In PKR:${totalcurrency}`);
//Task Number Ten//
document.write("</br>");
document.write("<h1>Task # 10 </h1>");
var newnumber1=((((5+5) *10 ) /2));
document.write(`Total Slove This Expression:${newnumber1}`);
//Task Number eleven//
document.write("</br>");
document.write("<h1>Task # 11 </h1>");
document.write("<h2> Age Calculator");
var Currentyear=+prompt("Enter a Current Year");
var birthyear=+prompt("Birth Year");
var totalage=(Currentyear-birthyear);
document.write(`Your Age is:${totalage}`);
//Task Number twelve//
document.write("</br>");
document.write("<h1>Task # 12 </h1>");
document.write("<h2>The Geometrizer </h2>");
var radius=+prompt("Enter a Radius of a Circle");
var circumference=((2*3.142)*radius);
var area=(3.142*radius*radius);
document.write(`The Circumference is ${circumference} </br> The Area is:${area}`);
//Task Number thirteen//
document.write("</br>");
document.write("<h1>Task # 13 </h1>");
document.write("<h2> The Lifetime Supply Calculator </h2>");
var favoritesnack=prompt("Enter Your Favorite Snack");
var currentage=+prompt("Enter Your Current Age");
var maximumage=+prompt("Enter Your Maximum Age");
var persnack=+prompt("Enter a Amount You Snack Per Day")
var totalage=(maximumage - currentage );
var totalsnack=(totalage*persnack);
document.write(`Favoritesnack:${favoritesnack} </br> Current Age:${currentage} </br> Estimed Maximum Age:${maximumage} </br> Amount of snacks per day:${persnack} </br> You Will Need ${totalsnack} ${favoritesnack} to last you until the ripe old age of : ${maximumage}` );


















































