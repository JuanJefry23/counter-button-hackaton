//Variables
const submit = document.querySelector("#submit");
const result = document.querySelector("#result");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const txtIncreasing = document.querySelector("#txt-increasing");
const txtDecreasing = document.querySelector("#txt-decreasing");
let counter = 0;
//Event
submit.addEventListener("click", counterFnc);

//Function
function counterFnc(e) {
  e.preventDefault();
  const optionClicked = e.target.value;

  if (optionClicked === "+") {
    counter = counter + 1;
    txtIncreasing.classList.remove("hide");

    setTimeout(() => {
      txtIncreasing.classList.add("hide");
    }, 1000);
  } else {
    counter = counter - 1;
    txtDecreasing.classList.remove("hide");

    setTimeout(() => {
      txtDecreasing.classList.add("hide");
    }, 1000);
  }

  result.value = counter;
}
