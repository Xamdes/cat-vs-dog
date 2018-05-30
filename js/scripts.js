var dogBark = document.createElement("audio");
var catMeow = document.createElement("audio");
dogBark.src = "sound/dog_bark_00.wav";
catMeow.src = "sound/cat_meow_00.wav";

function playAudio(audioName)
{
  audioName.play();
  setTimeout(stopAudio,1500,audioName);
}

function stopAudio(audioName)
{
  audioName.pause();
  audioName.load();
}

$(function(){

  $("button#dog-bark").click(function () {
    playAudio(dogBark);
  });

  $("button#cat-meow").click(function () {
    playAudio(catMeow);
  });



});
