function calcFatorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i += 1) result = result * i;
  return result;
}

let input = document.querySelector("#input");
let resultP = document.querySelector("#result");
let button = document.querySelector("#button");

if (input.value === "") resultP.innerHTML = `Insira um valor positivo acima,
e em seguida clique em no botão = para gerar o resultado.`;

button.addEventListener("click", () => {
  if (input.value === "") return alert("Insira um número");
  if (input.value <= 0) return alert("Insira um número positivo");
  resultP.innerHTML = `O fatorial de ${input.value}! é: 
  <strong>${calcFatorial(input.value)}</strong>`;
});
