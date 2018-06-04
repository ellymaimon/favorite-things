$(function(){


$("form").submit(function(event){
  var userFood = [$("input#food").val()];

  alert(userFood);

  event.preventDefault();
});

});
