function speak()
{
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("name").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}