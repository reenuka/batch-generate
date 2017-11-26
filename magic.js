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

    if (!suffix) {
      output.push(prefix + separator + number);
    } else {
      output.push(prefix + separator + number + separator + suffix);
    }
  }

  return output.join("\n");
}

function getElements () {
  var prefix = prefixNode.value;
  var suffix = suffixNode.value;
  var separator = separatorNode.value;
  var start = parseInt(startNode.value, 10);
  var end = parseInt(endNode.value, 10);
  var leadingZeros = leadingZerosNode.checked;
  var output = document.getElementById('output');

  output.value = addNumberToString(prefix, suffix, separator, start, end, leadingZeros);
}

var prefixNode = document.getElementById('prefix');
var suffixNode = document.getElementById('suffix');
var separatorNode = document.getElementById('separator');
var startNode = document.getElementById('start');
var endNode = document.getElementById('end');
var leadingZerosNode = document.getElementById('leading');

prefixNode.addEventListener("change", getElements, false);
suffixNode.addEventListener("change", getElements, false);
separatorNode.addEventListener("change", getElements, false);
startNode.addEventListener("change", getElements, false);
endNode.addEventListener("change", getElements, false);
leadingZerosNode.addEventListener("change", getElements, false);
