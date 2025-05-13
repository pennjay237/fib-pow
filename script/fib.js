  function createFibonacciCalculator() {
    //re
    function pjFibonacci(n) {
        //br
      if (n === 0) return 0;
      if (n === 1) return 1;
      //re
      return pjFibonacci(n - 1) + pjFibonacci(n - 2);
    }
  
    //cl
    return function(n) {
      return pjFibonacci(n);
    };
  }
  
  const getFibonacci = createFibonacciCalculator();
  //cl
  
  for (let i = 0; i < 10; i++) {
    console.log(getFibonacci(i));
  }
  