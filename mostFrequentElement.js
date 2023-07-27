function mostFrequentElement(arr) {
    const frequency = {};
    let mostFrequentNum = arr[0];
    let maxFrequency = 1;
  
    for (let i = 0; i < arr.length; i++) {
      const currentNum = arr[i];
      frequency[currentNum] = (frequency[currentNum] || 0) + 1;
  
      if (frequency[currentNum] > maxFrequency) {
        mostFrequentNum = currentNum;
        maxFrequency = frequency[currentNum];
      }
    }
  
    return mostFrequentNum;
  }
  
  const inputArr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const output = mostFrequentElement(inputArr);
  console.log(output);
  