function diffArray(arr1, arr2) {
  var newArr = [];
  var sortedArr1 = arr1.sort();
  var sortedArr2 = arr2.sort();
  for (i = 0; i < arr1.length; i++) {
    // need to accomodate for not pushing similar but different lengths together
    // diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
    // -> ["diorite", "pink wool"]
    if (sortedArr1[i] != sortedArr2[i]) {
      if (newArr.includes(sortedArr1[i]) == false && sortedArr1[i] != null) {
        newArr.push(sortedArr1[i]);
      }
      if (newArr.includes(sortedArr2[i]) == false && sortedArr2[i] != null) {
        newArr.push(sortedArr2[i]);
      }
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
