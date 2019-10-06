let catchData = () => {
  let f1 = document.querySelector("[f1]").value;
  let f2 = document.querySelector("[f2]").value;
  let elemento = document.querySelector(".resultado");
  console.log(f1 + f2);
    elemento.innerHTML = soma(parseInt(f1), parseInt(f2));
}
let soma = (a, b) => a + b
let replicador = () => {
    let input = document.querySelector("[input]").value
    let output = document.querySelector("[output]")
    output.innerHTML = input
}