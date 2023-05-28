const DELAY_TIME = 1;
var TIMEOUT;

export function doAnimations(sort, arr, time_out) {
  TIMEOUT = time_out;
  switch (sort) {
    case "bubbleSort":
      return bubbleSort(arr);
    case "selectionSort":
      return selectionSort(arr);
    case "insertionSort":
      return insertionSort(arr);
    default:
      return bubbleSort(arr);
  }
}

function sleep() {
  return new Promise((resolve) => {
    TIMEOUT[TIMEOUT.length] = setTimeout(() => {
      resolve();
    }, DELAY_TIME);
  });
}

function changeBarColor(arrBars, i1, i2, revertColorBool) {
  if(i1 < 0 || i2 < 0) return;
  if (revertColorBool) {
    arrBars[i1].style.backgroundColor = "#7aa6c0";
    arrBars[i2].style.backgroundColor = "#7aa6c0";
    return;
  }
  arrBars[i1].style.backgroundColor = "#EE6C4D";
  arrBars[i2].style.backgroundColor = "#EE6C4D";
}

function swap(arr, arrBars, i1, i2) {
  let temp = arr[i1];
  let temp_bar = arrBars[i1].style.height;
  arr[i1] = arr[i2];
  arrBars[i1].style.height = arrBars[i2].style.height;
  arr[i2] = temp;
  arrBars[i2].style.height = temp_bar;
}

async function bubbleSort(arr) {
  let arrBars = document.getElementsByClassName("arr-bar");
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      await sleep();
      changeBarColor(arrBars, j, j + 1, false);
      if (arr[j] > arr[j + 1]) {
        await sleep();
        swap(arr, arrBars, j + 1, j);
      }
      await sleep();
      changeBarColor(arrBars, j, j + 1, true);
    }
    arrBars[n - i - 1].style.backgroundColor = "#52b788";
  }
  return;
}

async function selectionSort(arr) {
  let arrBars = document.getElementsByClassName("arr-bar");
  const n = arr.length;
  for (let i = 0; i <= n - 1; i++) {
    let minIndx = i;
    for (let j = i + 1; j <= n - 1; j++) {
      await sleep();
      changeBarColor(arrBars, j, minIndx, false);
      await sleep();
      if (arr[j] < arr[minIndx]) {
        changeBarColor(arrBars, j, minIndx, true);
        minIndx = j;
      } else {
        changeBarColor(arrBars, j, minIndx, true);
      }
    }
    await sleep();
    swap(arr, arrBars, i, minIndx);
    arrBars[i].style.backgroundColor = "#52b788";
  }
  return;
}

async function insertionSort(arr) {
  let arrBars = document.getElementsByClassName("arr-bar");
  const n = arr.length;
  for(let i = 0; i <= n - 1; i++){
    let key = arr[i];
    let j = i - 1;
    while(j >= 0 && key < arr[j]){
      changeBarColor(arrBars, i, j, false);
      await sleep();
      arrBars[j+1].style.height = arrBars[j].style.height;
      arr[j+1] = arr[j];
      j = j -1;
      await sleep();
      changeBarColor(arrBars, i, j + 1, true);
    }
    console.log(j)
    await sleep();
    // changeBarColor(arrBars, i, j, true);
    arrBars[j+1].style.height = `${key}px`;
    arr[j+1] = key;
  }
  for(let i = 0; i < arrBars.length; i++) arrBars[i].style.backgroundColor = '#52b788';
  return;
}

async function mergeSort(arr){
  if(arr.length <= 1) return;
  let L = 0;
  let C = Math.floor(arr.length/2)
  let R = arr.length - 1
  


}
