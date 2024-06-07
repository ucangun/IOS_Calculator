const container = document.querySelector(".container");
const resultPage = document.querySelector(".result-page");
const reset = document.querySelector(".boxReset");

//! Reset
reset.addEventListener("click", () => {
  resultPage.textContent = "";
  currentNumber = "";
  previousNumber = "";
});

let clickedButton;
let valueOfClickedButton;
let operationButton;
let currentNumber = "";
let previousNumber = "";
let result;

//! Selecting of any buttons in container
container.addEventListener("click", (event) => {
  clickedButton = event.target;
  valueOfClickedButton = clickedButton.textContent;
  /// if the clicked element is a box
  if (clickedButton.classList.contains("box")) {
    /// if the value is a number
    if (
      !isNaN(valueOfClickedButton) &&
      valueOfClickedButton >= 0 &&
      valueOfClickedButton <= 9
    ) {
      currentNumber += valueOfClickedButton;
      resultPage.textContent = currentNumber;
      /// setting of current and previous numbers
    } else if (
      isNaN(valueOfClickedButton) &&
      valueOfClickedButton !== "AC" &&
      valueOfClickedButton !== "="
    ) {
      if (currentNumber !== "") {
        previousNumber = currentNumber;
        currentNumber = "";
      }
      operationButton = valueOfClickedButton;

      /// if the value is =
    } else if (valueOfClickedButton === "%" || valueOfClickedButton === "±") {
      switch (operationButton) {
        case "%":
          if (currentNumber !== "") {
            result = currentNumber / 100;
            resultPage.textContent = result;
          } else if (previousNumber !== "") {
            result = previousNumber / 100;
            resultPage.textContent = result;
          }
          break;

        case "±":
          result = previousNumber * -1;
          resultPage.textContent = result;

          break;

        default:
          break;
      }
    } else if (valueOfClickedButton === "=") {
      if (currentNumber !== "" && previousNumber !== "" && operationButton) {
        switch (operationButton) {
          case "÷":
            result = previousNumber / currentNumber;

            break;

          case "×":
            result = previousNumber * currentNumber;

            break;

          case "+":
            result = Number(previousNumber) + Number(currentNumber);

            break;

          case "-":
            result = previousNumber - currentNumber;

            break;
          default:
            break;
        }
        resultPage.textContent = result;
        previousNumber = result;
        currentNumber = "";
      }
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
