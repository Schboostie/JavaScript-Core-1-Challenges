// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  let sumOne = 0;

  for (let i = 0; i < arr.length; i++) {
    sumOne += arr[i];
  }
  return sumOne;
};
