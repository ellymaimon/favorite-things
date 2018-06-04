$(function(){


$("form").submit(function(event){
  var userFood = $("input#food").val();
  var userColor = $("input#color").val();
  var userAnimal = $("input#animal").val();
  var userCity = $("input#city").val();
  var userResponses =[userFood, userAnimal, userColor, userCity];

  var newArray = [];

  newArray.push(userResponses[1], userResponses[0], userResponses[2]);
  alert(newArray);


  event.preventDefault();
});

});
