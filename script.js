//selecting element
var inputbox = document.getElementById("inputbox")
var result = document.getElementById("result")
var guesscount = document.getElementById("guesscount")
var noofguess = 3

//Generate random number from 1 to 5
var randomnumber = math.floor(math.random()*10)+1 //1 to 10
if(randomnumber>5)
{
    randomnumber=randomnumber-5
}
//Event headler function
function checkthenumber()
{
    if(inputbox.value == randomnumber)
    {
        alert("You got it right,congratulation")
        result.textContent ="You are right"
    }
    else{
        noofguess=noofguess-1
        if(noofguess==0)
        {
            alert("You lost generated random number is : "+randomnumber)

        }
        guesscount.textContent = "available guesses:"+noofguess
        result.textContent="You are right"
    }

}