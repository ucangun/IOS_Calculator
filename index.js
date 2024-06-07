const resultPage = document.querySelector(".result-page");

let selectedNumber = [];
let valueOfSelectedNumber;

const numbers = [];
for (let i = 0; i <= 9; i++) {
  numbers.push(`box${i}`);
}
console.log(numbers);

numbers.forEach((number) => {
  selectedNumber.push(document.querySelector(`.${number}`));
});
console.log(selectedNumber);

selectedNumber.forEach((activeNumber) => {
  activeNumber.addEventListener("click", () => {
    valueOfSelectedNumber = activeNumber.textContent;
    console.log(valueOfSelectedNumber);
    console.log((resultPage.textContent = valueOfSelectedNumber));
  });
});
