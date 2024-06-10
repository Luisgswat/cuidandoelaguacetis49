var correctAnswer = "500 litros";
  
function checkAnswer(answer) {
  if (answer === true) {
    document.getElementById("result").innerHTML = "¡Correcto! Se necesitan aproximadamente 500 litros de agua para producir una hamburguesa.";
  } else {
    document.getElementById("result").innerHTML = "Incorrecto. La respuesta correcta es 500 litros.";
  }
}
