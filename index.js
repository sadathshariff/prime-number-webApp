let userInput = document.querySelector("#inputNum");
let button = document.querySelector("#inputBtn");
let output = document.querySelector(".outputResult");
function checkPrimeNumber() {
  let num = userInput.value;

  var i,
    result = true;
  if (num == "" || num == 1) {
    output.innerText = `Please Enter The Number and 1 is Composite Number`;
  } else {
    for (i = 2; i < num - 1; i++) {
      if (num % i == 0) {
        result = false;
      }
    }
    if (result == true) {
      console.log(num + " Is Prime");
      output.innerText = `${num} is a Prime Number`;
    } else {
      console.log(num + " Is not Prime");
      output.innerText = `${num} is Not a Prime Number`;
    }
  }
}

button.addEventListener("click", checkPrimeNumber);
