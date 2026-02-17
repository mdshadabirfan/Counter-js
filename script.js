const counterEl = document.querySelector("#counter");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const input = document.querySelector("#inputNumber");

let counterVal = 0;

increaseBtn.addEventListener("click", increaseFnc);
decreaseBtn.addEventListener("click", decreaseFnc);
resetBtn.addEventListener("click", resetFnc);

function increaseFnc() {
  let inputVal = Number(input.value);
  counterVal += inputVal;
  render();
}

function decreaseFnc() {
  let inputVal = Number(input.value);
  counterVal -= inputVal;
  render();
}

function resetFnc() {
  input.value = 1;
  counterVal = 0;
  render();
}

function render() {
  counterEl.textContent = counterVal;
}
