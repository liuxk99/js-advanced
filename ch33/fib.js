function fib(n, lastlast, last){
    if (n == 0) {
      return lastlast;
    }
    if (n == 1) {
      return last;
    }
    return fib(n-1, last, lastlast + last);
  }
  
  module.exports = fib;
  