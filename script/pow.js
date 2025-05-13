function createPowerFunction(baseNumber) {
    function pow(exponent) {
      console.log( + baseNumber + "^" + exponent);
  
      if (exponent === 0) {
        return 1; 
      }
  
      return baseNumber * pow(exponent - 1);
    }
  //cl
    return pow;
  }
    const powerOfFour = createPowerFunction(5);
  
  console.log(powerOfFour(5)); 
  