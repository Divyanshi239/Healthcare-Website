function speak()
{
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("mi").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
width = screen.width;

if(width => "992 px")
{
    document.getElementById("about").style.margin="0px 50px 0px 50px";
    document.getElementById("mission").style.margin="0px 50px 0px 50px";
    document.getElementById("diet").style.margin="0px 50px 0px 50px";
    document.getElementById("recipes").style.margin="0px 50px 0px 50px";
    document.getElementById("fitness").style.margin="0px 50px 0px 50px";
    document.getElementById("habits").style.margin="0px 50px 0px 50px";
    document.getElementById("if").style.width="1000px";
    document.getElementById("if").style.height="500px";
}