// print numbers

var screen = "0";
var store = 0;
var operation = 0;
var header = document.getElementById('displayscreen');
var lenErr = document.getElementById('len_error');
var errPrevent = 0;

// clear all

var clr = document.getElementById('clear');

function allClear() {

  screen = "0";
  store = 0;
  header.innerHTML = "0";

}

clr.addEventListener('click', allClear);

// print le digits

function printNum(dig) {

  var digVal = dig.target.value;
  var isDecimal = screen.indexOf('.');

  if (screen.length > 30) {

    header.innerHTML = "Oh snap!";

    setTimeout(function() {

        allClear();

    }, 3000);

  }

  else if (Number(screen) == 0 && isDecimal == -1) {

    screen = digVal;

  }

  else {

    screen = screen + digVal;

  }

  header.innerHTML = screen;

}

var numElms = document.getElementsByClassName('add_arr');

for (var i = 0; i < numElms.length; i++) {

  numElms[i].addEventListener('click', printNum);

}

// print decimal

var decimal =  document.getElementById('decimal');

decimal.addEventListener('click', function()  {

  var decimalInd = screen.indexOf('.');

  if (screen.length == 0) {

    screen = "0.";

  }

  else if (decimalInd == -1) {

    screen = screen + ".";

  }

  header.innerHTML = screen;

});

//print percent

var perc = document.getElementById('percent');

perc.addEventListener('click', getPercent);

function getPercent() {

  if (Number(screen) != 0) {

    screen = Number(screen) / 100;

    header.innerHTML = screen;
  } else {

    var mesgArr = ['woops!', 'forgot how to math?', 'cannot compute'];
    var myNum = Math.floor(Math.random() * Math.floor(3));
    header.innerHTML = mesgArr[myNum];

  }

}

// calculate the result

var result = document.getElementById('result');

function calculate() {

  if (operation === 1) {

    screen = Number(store) + Number(screen);

  }
  else if (operation === 2) {

    screen = Number(store) - Number(screen);

  }
  else if (operation === 3) {

    screen = Number(store) * Number(screen);

  }
  else if (operation === 4) {

    screen = Number(store) / Number(screen);

  }

  store = screen;
  header.innerHTML = screen;

}

result.addEventListener('click', function() {

  if (Number(screen) == 0 && operation == 4) {

    var funArr = ["sneaky divide by zero!!!", "undefined"];
    var fun = Math.floor(Math.random() * Math.floor(2));
    header.innerHTML = funArr[fun];

  }

  else if (isNaN(Number(screen))) {

    allClear();

  }

  else if (operation == 1 || operation == 2 || operation == 3 || operation == 4) {

    calculate();

  }

});


// operators operating function to operate on the digits, no it's not a smart medical pun, but it can be.

var operators = document.getElementsByClassName('printcheck');

function printOps(op) {

  var opVal = op.target.value.toString();

  switch(opVal) {
    case '+':
      operation = 1;
      break;
    case '-':
      operation = 2;
      break;
    case '*':
      operation = 3;
      break;
    case '/':
      operation = 4;
      break;
    default:
      return;
  }

  store = screen;
  screen = "0";
  header.innerHTML = "";


  setTimeout(function() {

    header.innerHTML = store;

  },60);

}

for (var n = 0; n < operators.length; n++) {

  operators[n].addEventListener('click', printOps);

}

// checkfor e
