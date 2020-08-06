let correctAnswer;

function setValue()
{
    correctAnswer = Math. floor(Math. random() * 100) + 1;
    //debugVal = "The correct answer it: " + correctAnswer.toString();
    debugVal = "";
    document.getElementById("debugSpot").innerHTML = debugVal;
}
function determineIfRight()
{
    let debugVal;
    let highestAnswer = 100;
    //let correctAnswer = Math. floor(Math. random() * 100) + 1;
    let answer;
    // debugVal = "The correct answer it: " + correctAnswer.toString();
    // document.getElementById("debugSpot").innerHTML = debugVal;

    try
    {

        answer = parseInt(document.getElementById("userNum").value, 10);
    }
    catch(err)
    {
        answer = "Invalid input";
    }

    
    if(!Number.parseInt(answer) && answer != 0)
    {
        document.getElementById("response").innerHTML = "You must input an integer";
    }
    else if(answer > highestAnswer || answer < 1)
    {
        document.getElementById("response").innerHTML = "You fool! I said input in integer between 1 and 100 (Inclusive)"
                                                + " Try again!";
    }
    else if(answer == correctAnswer)
    {
        //document.getElementById("response").innerHTML = "That's correct! Would you like to play again? (y/n)";
        victory();
    }else if(answer < correctAnswer)
    {
        document.getElementById("response").innerHTML = "Too low. Try again!";
    }
    else
    {
        document.getElementById("response").innerHTML = "Too high. Try again!";
    }
}

function victory()
{
    window.location.href = "Finished.html";
}