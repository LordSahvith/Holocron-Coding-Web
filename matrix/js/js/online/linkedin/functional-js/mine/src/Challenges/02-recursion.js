const fibinacci = n => {
  if (n <= 2) return 1;

  return fibinacci(n - 1) + fibinacci(n - 2);
};

console.log(fibinacci(1));
console.log(fibinacci(2));
console.log(fibinacci(5));
console.log(fibinacci(10));
