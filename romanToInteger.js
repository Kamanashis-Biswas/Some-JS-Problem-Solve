function romanToInteger(romanNumeral) {
    const romanValues = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let integerValue = 0;
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentChar = romanNumeral[i];
      const currentValue = romanValues[currentChar];
      const nextChar = romanNumeral[i + 1];
      const nextValue = romanValues[nextChar];
  
      if (nextValue > currentValue) {
        integerValue += nextValue - currentValue;
        i++;
      } else {
        integerValue += currentValue;
      }
    }
  
    return integerValue;
  }
  
  console.log(romanToInteger("IX"));
  console.log(romanToInteger("XXI"));