// back end logic


var pingPong = function(number) {
  var numberArray = [];

// this is pushing the userinput into the blank numberArray
  for (var index = 1; index <= number; index += 1) {
    if ((index % 3 === 0) && (index % 5 != 0) && (index % 15 != 0)) {
      numberArray.push("ping");
    } else if ((index % 5 === 0) && (index % 15 != 0) && (index % 3 != 0)){
      numberArray.push("pong");
    } else if ((index % 15 === 0) && (index % 5 === 0) && (index % 3 === 0)){
      numberArray.push("ping-pong");
    } else
      numberArray.push(index);
  };
    return numberArray;
}


// front end logic

$(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#user-number").val());
    var result = pingPong(number);

    $("#result ul").text(result);


  });
});
