function createFibonacciCalculator() {
    function computeFibonacci(n) {
      if (n === 0) return 0;
      if (n === 1) return 1;
      return computeFibonacci(n - 1) + computeFibonacci(n - 2);
    }
  
    return function(n) {
      return computeFibonacci(n);
    };
  }
  
  const getFibonacci = createFibonacciCalculator();
  
  for (let i = 0; i < 10; i++) {
    console.log(getFibonacci(i));
  }
  