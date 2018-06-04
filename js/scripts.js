$(function(){

  $("form").submit(function(event){
    event.preventDefault();
    var userFood = $("input#food").val();
    var userColor = $("input#color").val();
    var userAnimal = $("input#animal").val();
    var userCity = $("input#city").val();
    var userResponses =[userFood, userAnimal, userColor, userCity];
    var newArray = [];

    newArray.push(userResponses[1], userResponses[0], userResponses[2]);

    $("ul").append("<li>" + newArray[0] +"</li>");
    $("ul").append("<li>" + newArray[1] +"</li>");
    $("ul").append("<li>" + newArray[2] +"</li>");
  });

});
