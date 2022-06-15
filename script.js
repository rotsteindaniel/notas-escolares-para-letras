function calcular() {
  var nota = document.querySelector("#nota").value;
  var resultado = document.querySelector("#resultado");

  let notaA = nota >= 90 && nota <= 100;
  let notaB = nota >= 80 && nota <= 100;
  let notaC = nota >= 70 && nota <= 100;
  let notaD = nota >= 60 && nota <= 100;
  let notaE = nota >= 50 && nota <= 100;
  let notaF = nota < 50;

  if (notaA) {
    resultado.innerHTML = "Sua nota é A";
  } else if (notaB) {
    resultado.innerHTML = "Sua nota é B";
  } else if (notaC) {
    resultado.innerHTML = "Sua nota é C";
  } else if (notaD) {
    resultado.innerHTML = "Sua nota é D";
  } else if (notaE) {
    resultado.innerHTML = "Sua nota é E";
  } else if (notaF) {
    resultado.innerHTML = "Sua nota é F";
  }
}
