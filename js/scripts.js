//Business Logic
function doItAll(str) {
  var splitSentence = str.split(" ");
  var threePlus = [];
  splitSentence.forEach(function(word) {
    if (word.length >= 3) {
      threePlus.push(word);
    }
  });
  threePlus.reverse();
  return threePlus;
};

//User Interface
$(document).ready(function() {
  $("#sentence").submit(function(event) {
  event.preventDefault();
    var originalSentence = $("#inputSentence").val();
    $(".newSentence").html(doItAll(originalSentence).join(" "));
  });
});
