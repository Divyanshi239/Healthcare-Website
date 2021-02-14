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
    document.getElementById("dietimg").style.width="400px";
    document.getElementById("dietimg").style.height="300px";
    document.getElementById("dietimg2").style.width="400px";
    document.getElementById("dietimg2").style.height="300px";
    document.getElementById("dietimg2").hover.width="550px"
}

if(width <= "992 px")
{
    document.getElementById("about").style.margin="0px 20px 0px 20px";
    document.getElementById("mission").style.margin="0px 20px 0px 20px";
    document.getElementById("diet").style.margin="0px 20px 0px 20px";
    document.getElementById("recipes").style.margin="0px 20px 0px 20px";
    document.getElementById("fitness").style.margin="0px 20px 0px 20px";
    document.getElementById("habits").style.margin="0px 20px 0px 20px";
    document.getElementById("if").style.width="300px";
    document.getElementById("if").style.height="230px";
    document.getElementById("dietimg").style.width="400px";
    document.getElementById("dietimg").style.height="300px";
    document.getElementById("dietimg2").style.width="400px";
    document.getElementById("dietimg2").style.height="300px";
    document.getElementById("dietimg2").hover.width="550px"
}