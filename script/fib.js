  function createFibonacciCalculator() {
    //re
    function pjFibonacci(n) {
        //br
      if (n === 0) return 0;
      if (n === 1) return 1;
      //re
       const prevNum1 = pjFibonacci(n - 1);
       const prevNum2 = pjFibonacci(n - 2);
       return prevNum1 + prevNum2;
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
  
