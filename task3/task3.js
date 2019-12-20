var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
} // this will return message as a is incremented before condition is applied


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} // thhis will not returm any message as b is incremented after condition is applied


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
} // thhis will not returm any message as c is incremented after condition is applied
if (c === 13){
alert("condition 2 is true");
} // thhis will not returm any message as c is already incremented in last stepcondition is applied
if (++c < 14){
alert("condition 3 is true");
}//This will not return anything bcoz c is now 14
if(c === 14){
alert("condition 4 is true");
} //This will return alert message bcoz c is now 14

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
} //material cost and labour cost are added and stored in total cost in third step thats why total cost has 
  //equal value as the sum of other two values so that it will retun the alert message
  
  
  if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }    // the condition is true that's why i will execute first  alert message and will exit without checking second condition

    if("car" < "cat"){
    alert("car is smaller than cat");
    }
