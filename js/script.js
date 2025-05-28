let isReversed = false;

function convert() {
      const inputValue = document.getElementById("celcius").value;
      const output = document.getElementById("fahrenheit");
      const explanation = document.getElementById("cara");

      if (inputValue === "") {
         alert("Masukkan nilai suhu terlebih dahulu!");
         return;   
      }    

let result, text;
const suhu = parseFloat(inputValue);

if (!isReversed) {
result = (suhu * 9/5) + 32;
text = `${suhu} °C x 9/5 + 32 = ${result.toFixed(2)} °F`;
} else {
result = (suhu - 32) * 5/9;
text = `${suhu} °F - 32 x 5/9 = ${result.toFixed(2)} °C`;
}  

output.value = result.toFixed(2);
explanation.value = text;
}

function reset() {
    document.getElementById("celcius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("cara").value = "";
}

function reverse() {
      isReversed = !isReversed;

      const title = document.querySelector("h2");
      const inputLabel = document.getElementById("labelInput")
      const outputLabel = document.getElementById("labelOutput");

      if (isReversed) {
            title.innerText = "Konversi Fahrenheit ke Celcius";
            inputLabel.innerText = "Fahrenheit(°F)";
            outputLabel.innerText = "Celcius(°C)";
      } else {
            title.innerText = "Konversi Celcius ke Fahrenheit";
            inputLabel.innerText = "Celcius(°C)";
            outputLabel.innerText = "Fahrenheit(°F)";
      }

      reset();
}

document.querySelector(".convert").addEventListener("click", function (e) {
  e.preventDefault();
  convert();
});
document.querySelector(".reset").addEventListener("click", function (e) {
  e.preventDefault();
  reset();
});
document.querySelector(".reverse").addEventListener("click", function (e) {
  e.preventDefault();
  reverse();
});
