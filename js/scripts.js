// back end logic


var pingPong = function(number) {
  var numberArray = [];

// this is pushing the userinput into the blank numberArray
  for (var index = 1; index <= number; index += 1) {
    numberArray.push(index);
  }
  console.log(numberArray);
  return numberArray

// this inserts ping, pong or ping-pong in place of numbers divisible by 3, 5 or 15

  var numberManipulation = numberArray.map(function(number) {
    if ((number % 3 === 0) && (number % 5 !== 0) && (number % 15 !== 0)) {
      return "ping";
    } else if ((number % 5 === 0) && (number % 15 !== 0) && (number % 3 !== 0)){
      return "pong";
    } else if ((number % 15 === 0) && (number % 5 === 0) && (number % 3 === 0)){
      return "ping-pong";
    } else {
      return number
    }
  });

  numberManipulation(number);
  return numberManipulation
  console.log(numberManipulation);
}



// front end logic

$(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#user-number").val());
    var result = pingPong(number);

    $("#result").text(result);


  });
});
