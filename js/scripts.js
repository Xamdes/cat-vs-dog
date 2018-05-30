var dogBark = document.createElement("audio");
var catMeow = document.createElement("audio");
dogBark.src = "sound/dog_bark_00.wav";
catMeow.src = "sound/cat_meow_00.wav";

function playAudio(audioName)
{
  audioName.play();
  setTimeout(stopAudio,1500,audioName);
}

function playAudioTimeout(audioName,timeout)
{
  setTimeout(playAudio,timeout,audioName);
}

function stopAudio(audioName)
{
  audioName.pause();
  audioName.load();
}

$(function(){

  $("button#dog-bark").click(function () {
    playAudioTimeout(dogBark,0);
    playAudioTimeout(catMeow,1500);
  });

  $("button#cat-meow").click(function () {
    playAudioTimeout(catMeow,0);
    playAudioTimeout(dogBark,1500);
  });



});
