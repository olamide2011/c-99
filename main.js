var SpeechRecognition=window.webkitSpeechRecognition;

var Recognition=new SpeechRecognition();

function start() {
    Recognition.start();
    document.getElementById("textbox").innerHTML="";

}
Recognition.onresult=function(event) {
    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    if (Content=="take my selfie") {
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data ="taking selfie in 5 seconds";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
}
camera =document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
png_quality:90
});