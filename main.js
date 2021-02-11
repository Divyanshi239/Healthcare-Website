function speak()
{
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("mi").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

width = screen.width;

if(width <= "960")
{
    document.getElementById("about").style.margin = "0px 100px 0px 100px";
}