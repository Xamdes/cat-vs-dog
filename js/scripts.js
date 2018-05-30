function prependList(stringOne,where,type){
  var returnString = "";
  returnString = returnString.concat("<", type, ">", stringOne, "</", type, ">");
  $(where).prepend(returnString);
}

function removeOnClick(where,type)
{
  $(where).children(type).first().click(function()
  {
    $(this).remove();
  });
}

function turnColor()
{
  $("li").css("background-color","green");
}

$(function(){

  $("button#hello").click(function () {
    prependList("Hello!","ul#user","li");
    prependList("Why hello there!","ul#webpage","li");
    removeOnClick("ul#user","li");
    removeOnClick("ul#webpage","li");
  });

  $("button#goodbye").click(function () {
    prependList("Goodbye!","ul#user","li");
    prependList("Goodbye, dear user!","ul#webpage","li");
    removeOnClick("ul#user","li");
    removeOnClick("ul#webpage","li");
  });

  $("button#stop").click(function () {
    prependList("Stop copying me!","ul#user","li");
    prependList("Pardon me. I meant no offense.","ul#webpage","li");
    removeOnClick("ul#user","li");
    removeOnClick("ul#webpage","li");
  });

});
