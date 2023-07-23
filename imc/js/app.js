let weight = document.getElementById("weight");
let height = document.getElementById("height");
let result = document.getElementById("result");

function calculateIMC() {
  let weightValue = weight.value;
  let heightValue = height.value / 100;

  const imc = weightValue / (heightValue * heightValue);
  const imcFormatted = imc.toFixed(2);

  result.textContent =  `Seu IMC é: ${imcFormatted}`;
}