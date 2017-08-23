function diffArray(arr1, arr2) {
  var newArr = [];
  var sortedArr1 = arr1.sort();
  var sortedArr2 = arr2.sort();
  for (i = 0; i < arr1.length; i++) {
    if (sortedArr1[i] != sortedArr2[i]) {
      if (newArr.includes(sortedArr1[i]) == false) {
        newArr.push(sortedArr1[i]);
      }
      if (newArr.includes(sortedArr2[i]) == false) {
        newArr.push(sortedArr2[i]);
      }
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
