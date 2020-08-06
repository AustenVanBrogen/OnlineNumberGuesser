function finishOrStartOver()
{
    let answer = document.getElementById("Yes").checked;

    if(answer)
    {
        window.location.href = "NumberGuesser.html";
    }
    else
    {
        window.location.href = "ThanksForPlaying.html";
    }
}