const numArr = [];

document.querySelector("#addBtn").addEventListener("click", e => {
  let val = parseInt(document.querySelector("#numInp").value);
  addToArray(numArr, val);
  addToPage(document.querySelector("#unsorted-arr"), numArr);
  clearField(document.querySelector("#numInp"));
  e.preventDefault();
});

document.querySelector("#sortBtn").addEventListener("click", e => {
  sortArr(numArr);
  e.preventDefault();
});

function clearField(el) {
  el.value = "";
}

function addToArray(arr, val) {
  arr.push(val);
}

function sortArr(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  addToPage(document.querySelector("#sorted-arr"), sortedArr);
}

function addToPage(element, arr) {
  element.innerHTML = "";
  document.createElement("li");
  arr.forEach(el => {
    element.innerHTML += `<li>${el}</li}`;
  });
}
