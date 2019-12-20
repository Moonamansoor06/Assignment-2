var science = prompt("Marks obtained in Science:");
var totalsc = prompt("Total Marks in Science");
var sst = prompt("Marks obtained in Sst:");
var totalsst = prompt("Total Marks in Sst");
var maths = prompt("Marks obtained in Maths:");
var totalmath = prompt("Total Marks in Maths");

var total = Number(science) + Number(maths) + Number(sst);
var grandtotal = Number(totalsc) + Number(totalmath) + Number(totalsst);
var percentage = (total /grandtotal) * 100;


if (percentage >=  80) {
    document.write("<h1>", "Marks Sheet: " ,"</h1>" ); 
    document.write( "<br>" ,"Total Marks: " , grandtotal);
    document.write( "<br>", "Mraks Obtained: " , total);
    document.write( "<br>", "Percentage: ",percentage);
    document.write( "<br>","Grade: ", "A-one");
    document.write( "<br>", "Remarks: Excellent" );
}
else if (percentage >=  70)
 {
    document.write("<h1>", "Marks Sheet: " ,"</h1>" ); 
    document.write( "<br>" ,"Total Marks: " , grandtotal);
    document.write( "<br>", "Mraks Obtained: " , total);
    document.write( "<br>", "Percentage: ",percentage);
    document.write( "<br>","Grade: ", "A");
    document.write( "<br>", "Remarks: Good" );
}
else if (percentage >=  60) 
{
    document.write("<h1>", "Marks Sheet: " ,"</h1>" ); 
    document.write( "<br>" ,"Total Marks: " , grandtotal);
    document.write( "<br>", "Mraks Obtained: " , total);
    document.write( "<br>", "Percentage: ",percentage);
    document.write( "<br>","Grade: ", "B");
    document.write( "<br>", "Remarks: You need to improve" );
}
else if (percentage < 60)
  {
    document.write("<h1>", "Marks Sheet: " ,"</h1>" ); 
    document.write( "<br>" ,"Total Marks: " , grandtotal);
    document.write( "<br>", "Mraks Obtained: " , total);
    document.write( "<br>", "Percentage: ",percentage);
    document.write( "<br>","Grade: ", "Fail");
    document.write( "<br>", "Remarks: Sorry" );
}

