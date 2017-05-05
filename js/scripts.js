// back end logic


var replacedNumbers = function(number) {
  if ((number % 3 === 0) && (number % 5 !== 0) && (number % 15 !== 0)) {
    return "ping";
  } else if ((number % 5 === 0) && (number % 15 !== 0) && (number % 3 !== 0)){
    return "pong";
  } else if ((number % 15 === 0) && (number % 5 === 0) && (number % 3 === 0)){
    return "ping-pong";
  } else {
    return number
  }
};





// front end logic

$(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#user-number").val());
    var result = replacedNumbers(number);

    $("#result").text(result);

  });
});
