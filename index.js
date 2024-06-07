const container = document.querySelector(".container");
const resultPage = document.querySelector(".result-page");
const reset = document.querySelector(".boxReset");
const absolute = document.querySelector(".boxAbsolute");

//! Reset
reset.addEventListener("click", () => {
  resultPage.textContent = "";
});

//! Selecting of any buttons in container
container.addEventListener("click", (event) => {
  clickedButton = event.target;
  //console.log(clickedButton);
  valueOfClickedButton = clickedButton.textContent;
  //console.log(valueOfClickedButton);
  if (clickedButton.classList.contains("box")) {
    if (valueOfClickedButton >= 0 && valueOfClickedButton <= 9) {
      resultPage.textContent = valueOfClickedButton;
    } else if (isNaN(valueOfClickedButton) && valueOfClickedButton !== "AC") {
      console.log(valueOfClickedButton);
    }
  }
});

//! Operation Buttons
const divide = document.querySelector(".boxDivide");
const procent = document.querySelector(".boxProcent");
const multi = document.querySelector(".boxMulti");
const minus = document.querySelector(".boxMinus");
const plus = document.querySelector(".boxPlus");
const equal = document.querySelector(".boxEqual");

//*************************************************************/
//! Numbers Selected && Show on Result Page
/*
const numbers = [];
for (let i = 0; i <= 9; i++) {
  numbers.push(`box${i}`);
}
//console.log(numbers);

let selectedNumber = [];
let valueOfSelectedNumber;

numbers.forEach((number) => {
  selectedNumber.push(document.querySelector(`.${number}`));
});
//console.log(selectedNumber);

selectedNumber.forEach((activeNumber) => {
  activeNumber.addEventListener("click", () => {
    valueOfSelectedNumber = activeNumber.textContent;
    resultPage.textContent = valueOfSelectedNumber;
  });
});
*/
