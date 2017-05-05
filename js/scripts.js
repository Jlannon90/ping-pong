// back end logic


function pingPong(number) {
  for (var index = 1; index <= number; index += 1) {
    if ((index % 3 === 0) && (index % 5 !== 0) && (index % 15 !== 0)) {
      return "ping";
    } else if ((index % 5 === 0) && (index % 15 !== 0) && (index % 3 !== 0)){
      return "pong";
    } else if ((index % 15 === 0) && (index % 5 === 0) && (index % 3 === 0)){
      return "ping-pong";
    } else {
      return index
    }
  }
}


// var replacedNumbers = function(number) {
//
// }

// numberArray.forEach(function(number) {
//   replacedNumbers();
//   return numberArray;
//   console.log(numberArray);
// });


// front end logic

$(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#user-number").val());
    var result = pingPong();

    $("ul").text(result);
    // alert(newNumbers);

  });
});
