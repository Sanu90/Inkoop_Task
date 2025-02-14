document.getElementById("numberInput").addEventListener("input", processData);

function processData() {
  let output = document.getElementById("output");
  let oddOrEven = document.getElementById("oddorEven");
  let data = document.getElementById("numberInput").value;
  console.log("Data entered is", data);
  //   console.log("submit clicked");
  let value = parseInt(data);
  if (data === "" || data === "-") {
    oddOrEven.textContent = "";
    output.textContent = "";
    // console.log("Hello here");
  } else if (data < 0) {
    oddOrEven.textContent = "";
    output.textContent = `Enter a positive number`;
  } else if (data % 2 == 0) {
    // console.log(typeof data);
    // console.log(value + 2);
    oddOrEven.textContent = `Next 3 Even Numbers...`;
    output.textContent = `${value + 2}, ${value + 4}, ${value + 6}`;
  } else if (data % 2 == 1) {
    // console.log(typeof data);
    // console.log(value + 2);
    oddOrEven.textContent = `Next 3 Odd Numbers...`;
    output.textContent = `${value + 2}, ${value + 4}, ${value + 6}`;
  }
}
