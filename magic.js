function zeroPadding (number, max) {
  return ("0".repeat((max.toString().length) - (number.toString().length))) + number;
}

function addNumberToString (prefix, suffix, separator, start, end, leadingZeros) {
  var output = [];

  for (var i = start; i <= end; i++) {
    var number = i;
    if (leadingZeros) {
      number = zeroPadding(i, end);
    }

    output.push(prefix + separator + number + separator + suffix);
  }

  return output.join("\n");
}

function getElements () {
  var prefix = document.getElementById('prefix').value;
  var suffix = document.getElementById('suffix').value;
  var separator = document.getElementById('separator').value;
  var start = parseInt(document.getElementById('start').value, 10);
  var end = parseInt(document.getElementById('end').value, 10);
  var leadingZeros = document.getElementById('leading').checked;
  var output = document.getElementById('output');

  output.value = addNumberToString(prefix, suffix, separator, start, end, leadingZeros);
}

var button = document.getElementById('button');
button.addEventListener("click", getElements, false);
