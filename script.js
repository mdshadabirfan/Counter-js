const counterEl = document.querySelector("#counter");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const input = document.querySelector("#inputNumber");

let counterVal = 0;

increaseBtn.addEventListener("click", increaseFnc);
decreaseBtn.addEventListener("click", decreaseFnc);
resetBtn.addEventListener("click", resetFnc);


function getStepValue() {
  const rawValue = input.value.trim();
  if (rawValue === "") {
    input.value = 1;
    return 1;
  } else {
    const value = Number(rawValue);
    return isNaN(value) ? 1 : value;
  }
}

function increaseFnc() {
  let inputVal = getStepValue();
  counterVal += inputVal;
  render();
}

function decreaseFnc() {
  let inputVal = getStepValue();
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
