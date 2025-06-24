function numberToString(n, base = 10) {
  let result = '';
  let sign = '';

  if (n < 0) {
    sign = '-';
    n = -n;
  }

  do {
    result = String(n % base) + result;
    // n /= base; // cause of bug
    n = Math.floor(n / base);
  } while (n > 0);

  return sign + result;
}

// before bug fix: 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3e-3171.3e-3161.3e-3151.3e-3141....
// after bug fix: 13 1 0
console.log(numberToString(13, 10));
