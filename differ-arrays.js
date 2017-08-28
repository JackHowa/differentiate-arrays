function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        newArrItem => !arr1.includes(newArrItem) || !arr2.includes(newArrItem)
    );
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
