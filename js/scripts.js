var dogBark = document.createElement("audio");
var catMeow = document.createElement("audio");
dogBark.src = "sound/dog_bark_00.wav";
catMeow.src = "sound/cat_meow_00.wav";


/*
Play Audio file after set amount of time has passed in milliseconds
1 second = 1000 milliseconds
setTimeout takes in function name, a timeout number and optional parameters for the given function
*/
function playAudioTimeout(audioName,timeout,stopTimer)
{
  setTimeout(playAudio,timeout,audioName,stopTimer);
}

//Play audio file called audioName
function playAudio(audioName,stopTimer)
{
  audioName.play();
  setTimeout(stopAudio,stopTimer,audioName);
}

//Pauses audio then reloads it so the audio file starts at begining if we play it again.
function stopAudio(audioName)
{
  audioName.pause();
  audioName.load();
}

$(function(){

  $("button#dog-bark").click(function () {
    playAudioTimeout(dogBark,0,1500);
    playAudioTimeout(catMeow,1500,1500);
  });

  $("button#cat-meow").click(function () {
    playAudioTimeout(catMeow,0,1500);
    playAudioTimeout(dogBark,1500,1500);
  });
});
