function finishOrStartOver()
{
    let answer = document.getElementById("Yes").checked;

    if(answer)
    {
        window.location.href = "index.html";
    }
    else
    {
        window.location.href = "ThanksForPlaying.html";
    }
}