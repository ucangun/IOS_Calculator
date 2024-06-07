const container = document.querySelector(".container");
const resultPage = document.querySelector(".result-page");
const reset = document.querySelector(".boxReset");
const dot = document.querySelector(".boxDot");

//! Reset
reset.addEventListener("click", () => {
  resultPage.textContent = "";
  currentNumber = "";
  previousNumber = "";
});

//! Switch - Case Reset

function afterSwitchCase() {
  resultPage.textContent = result;
  previousNumber = result;
  currentNumber = "";
}

function calculateResult() {
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
    afterSwitchCase();
  }
}

//? Variables

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
      /// if the value is not a number ; setting of current and previous numbers
    } else if (
      isNaN(valueOfClickedButton) &&
      valueOfClickedButton !== "AC" &&
      valueOfClickedButton !== "=" &&
      valueOfClickedButton !== "%" &&
      valueOfClickedButton !== "±" &&
      valueOfClickedButton !== "."
    ) {
      if (currentNumber !== "") {
        previousNumber = currentNumber;
        currentNumber = "";
      }
      operationButton = valueOfClickedButton;

      /// if the value is =
    } else if (valueOfClickedButton === "=") {
      calculateResult();
      /// if the value is % , ±
    } else if (valueOfClickedButton === "%" || valueOfClickedButton === "±") {
      if (resultPage.textContent !== "") {
        switch (valueOfClickedButton) {
          case "%":
            result = resultPage.textContent / 100;
            break;

          case "±":
            result = resultPage.textContent * -1;
            break;

          default:
            break;
        }
        afterSwitchCase();
      }
      /// if the value is .
    } else if (valueOfClickedButton === ".") {
      if (
        resultPage.textContent !== "" &&
        !resultPage.textContent.includes(".")
      ) {
        currentNumber += ".";
        resultPage.textContent = currentNumber;
      }
    }
  }
});
