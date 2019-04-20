function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n) {
  if (n <= 0 || n > 1000000) {
    throw 'Input is not between boundaries';
  }

  if (!Number.isInteger(n)) {
    throw 'Input is not a number';
  }

  let flips = [], output, counter;
  let exponent = nearestExponentPowerOfTwo(n) + 1;

  counter = exponent;

  while (!flips.length) {
    while (counter) {
      flip() ? flips.push(1) : flips.push(0);
      counter--;
    }

    output = parseInt(flips.join(''), 2);

    if (output >= n) {
      flips = [];
      counter = exponent;
    }
  }

  return output;
}

function nearestExponentPowerOfTwo(n) {
  return Math.floor(Math.log(n) / Math.log(2));
}

console.log(randomNumber(500));