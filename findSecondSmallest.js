function findSecondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("Array should have at least two elements.");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    return secondSmallest;
  }
  
  const numbers = [10, 5, 8, 2, 7, 3, 1];
  console.log(findSecondSmallest(numbers));
  