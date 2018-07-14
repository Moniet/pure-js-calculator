// print numbers

var screen = "0";
var store = 0;
var operation = 0;
var header = document.getElementById('displayscreen');
var lenErr = document.getElementById('len_error');
var errPrevent = 0;

function printNum(dig) {

  var digVal = dig.target.value;
  var isDecimal = screen.indexOf('.');

  if (screen.length > 30) {

    lenErr.style.opacity = '1';

    setTimeout(() => { lenErr.style.opacity = '0'; }, 2000);

  }

  else if (eval(screen) === 0 && isDecimal === -1) { screen = digVal; }

  else { screen = screen + digVal; }

  header.innerHTML = screen;

}

var numElms = document.getElementsByClassName('add_arr');

for (var i = 0; i < numElms.length; i++) {

  numElms[i].addEventListener('click', printNum);

}

// print decimal

var decimal =  document.getElementById('decimal');

decimal.addEventListener('click', () => {

  var decimalInd = screen.indexOf('.');

  if (screen.length === 0) {

    screen = "0.";

  }

  else if (decimalInd === -1) {

    screen = screen + ".";

  }

  header.innerHTML = screen;


});


// clear all

var clr = document.getElementById('clear');

clr.addEventListener('click', () => { screen = "0"; header.innerHTML = "0"; });


// calculate the result

var result = document.getElementById('result');

function calculate() {

  if (operation === 1) {

    screen = eval(store) + eval(screen);

  }
  else if (operation === 2) {

    screen = eval(store) - eval(screen);

  }
  else if (operation === 3) {

    screen = eval(store) * eval(screen);

  }
  else if (operation === 4) {

    screen = eval(store) / eval(screen);

  }

  errPrevent = 0;
  header.innerHTML = screen;

}

result.addEventListener('click', calculate);


// operators

var operators = document.getElementsByClassName('printcheck');

function printOps(op) {

  var opVal = op.target.value.toString();

  if (opVal === '+' && errPrevent === 0) {

    operation = 1;

  }
  else if (opVal === '-' && errPrevent === 0) {

    operation = 2;

  }
  else if (opVal === '*' && errPrevent === 0) {

    operation = 3;

  }
  else if (opVal === '/' && errPrevent === 0) {

    operation = 4;

  }

  errPrevent = 1;
  store = screen;
  screen = "";
  header.innerHTML = screen;

}

for (var n = 0; n < operators.length; n++ ) {

  operators[n].addEventListener('click', printOps);

}

// disp op value
