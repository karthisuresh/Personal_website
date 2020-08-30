$(".inner-switch").on("click", function () {
  var image = document.getElementsByClassName("sun-img fadeInDown inner-switch");
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    // @ts-ignore
  } else {
    $("body").addClass("dark");
  }
});

function videowidth(){
  var video=document.getElementById("video");
  console.log(video);
  

}