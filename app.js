// Variables
const currOne = document.querySelector("#currency-one");
const amOne = document.querySelector("#amount-one");
const currTwo = document.querySelector("#currency-two");
const amTwo = document.querySelector("#amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

const headingOne = document.querySelector(".countryOne");
const headingTwo = document.querySelector(".countryTwo");

console.log(currOne.value);
console.log(amOne.value);

// Fetch exchange rate and update DOM
function calculate() {
  const currencyOne = currOne.value;
  const currencyTwo = currTwo.value;

  headingOne.innerText = currOne.value;
  headingTwo.innerText = currTwo.value;
  console.log(currencyOne, currencyTwo);

  fetch(
    `https://v6.exchangerate-api.com/v6/9069d66eadbd203998783751/latest/${currencyOne}`
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.conversion_rates);
      const rate = data.conversion_rates[currencyTwo];
      console.log("rate", rate);
      rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

      amTwo.value = (amOne.value * rate).toFixed(2);
    });
}
console.log(currOne.value.toUpper);
// Event Listeners
currOne.addEventListener("change", calculate);
amOne.addEventListener("input", calculate);
currTwo.addEventListener("change", calculate);
amTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currOne.value;
  currOne.value = currTwo.value;
  currTwo.value = temp;

  const temp2 = headingOne.value;
  headingOne.value = headingTwo.value;
  headingTwo.value = temp2;

  calculate();
});

calculate();
