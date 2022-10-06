// Задание 1
function getArrayParams(arr) {
  
  let min = arr[0];
  let max = arr[arr.length - 1];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
   
    if (arr[i] < min) {
      min = arr[i];
    }
   
    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let value = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    value = func(arrOfArr[i]);

    if (value > max) {
      max = value;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[arr.length - 1];
  let difference = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
   
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  difference = Math.ads(max-min);

  return difference;
  
}
