function createPowerFunction(baseNumber) {
    function power(exponent) {
      console.log("Calculating " + baseNumber + "^" + exponent);
  
      if (exponent === 0) {
        return 1; 
      }
  
      return baseNumber * power(exponent - 1);
    }
  
    return power;
  }
    const powerOfFour = createPowerFunction(4);
    console.clear();
  
  console.log(powerOfFour(3)); 
  