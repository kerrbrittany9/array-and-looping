$(document).ready(function() {
  $(".survey").submit(function(event) {
    event.preventDefault();

    var food = $("input#food").val();
    var movie = $("input#movie").val();
    var pickMeUp = $("input#pick-me-up").val();
    var boyBand = $("input#boy-band").val();
    var tyrant = $("input#tyrant").val();
    var breadProduct = $("input#bread").val();

    var array = [food, movie, pickMeUp, boyBand, tyrant, breadProduct];

    var newArray = [];
    newArray.push(array[1], array[0], array[2]);

    var list = "<li>" + newArray[0] +  "</li>" +  "<li>" + newArray[1] +  "</li>" + "<li>" + newArray[2] +  "</li>"

    $(".result").show();
    $("#newArray").prepend(list);

  });
});
