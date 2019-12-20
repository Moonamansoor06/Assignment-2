var number = 6;
var secnum = prompt("Guess the secret number");
 
secnum = Number(secnum);


if (secnum === number) {
    alert("Bingo! Correct Answer");
}
else if (++secnum === number) 
{
    alert("Close enough to the correct answer");
                                                                       
} 