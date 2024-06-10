const container = document.querySelector(".container");
const operationDisplay = document.querySelector(".operation-display");
const resultDisplay = document.querySelector(".result-display");
const reset = document.querySelector(".boxReset");
//*
const dot = document.querySelector(".boxDot");
const absolute = document.querySelector(".boxAbsolute");
const percent = document.querySelector(".boxPercent");
const equal = document.querySelector(".boxEqual");

//? Variables
let clickedButton;
let valueOfClickedButton;
let operationButton;
let currentNumber = "";
let previousNumber = "";
let result;

//! display Result
function displayResult() {
  resultDisplay.textContent = result;
  previousNumber = result;
  currentNumber = "";
  operationDisplay.textContent = "";
}
//! Function to calculate result
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
    displayResult();
  }
}

//! Selecting of any buttons in container
container.addEventListener("click", (event) => {
  clickedButton = event.target;
  valueOfClickedButton = clickedButton.textContent;

  // if the clicked element is not a box return
  if (!clickedButton.classList.contains("box")) return;

  // if the value is a number
  if (!isNaN(valueOfClickedButton)) {
    if (currentNumber === "0") {
      currentNumber = valueOfClickedButton;
    } else {
      currentNumber += valueOfClickedButton;
    }
    resultDisplay.textContent = currentNumber;

    // if the value is a math operator ; setting of current and previous numbers
  } else if (["÷", "×", "+", "-"].includes(valueOfClickedButton)) {
    if (currentNumber !== "") {
      previousNumber = currentNumber;
      currentNumber = "";
    }
    operationButton = valueOfClickedButton;

    if (previousNumber !== "") {
      const topResult = previousNumber + " " + operationButton;
      operationDisplay.textContent = topResult;
      resultDisplay.textContent = "";
    }
  }
});

//*

// Equal event listener
equal.addEventListener("click", () => {
  calculateResult();
});

// Reset event listener
reset.addEventListener("click", () => {
  resultDisplay.textContent = "";
  operationDisplay.textContent = "";
  currentNumber = "";
  previousNumber = "";
});

// Absolute event listener

absolute.addEventListener("click", () => {
  if (resultDisplay.textContent !== "") {
    result = resultDisplay.textContent * -1;
  }
  displayResult();
});

// Percent event listener
percent.addEventListener("click", () => {
  if (resultDisplay.textContent !== "") {
    result = resultDisplay.textContent / 100;
  }
  displayResult();
});

// Dot Event Listener
dot.addEventListener("click", () => {
  if (
    resultDisplay.textContent !== "" &&
    !resultDisplay.textContent.includes(".")
  ) {
    currentNumber += ".";
    resultDisplay.textContent = currentNumber;
  }
});
