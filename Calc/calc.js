var vahe = 0
document.getElementById("vahe").innerHTML = vahe

function pluss() {
  var btn = document.createElement("p");
  btn.classList.add('positive')
  btn.innerHTML = document.getElementById("nomero").value
  document.getElementById("tulud_kokku").appendChild(btn)
  var tulu = +document.getElementById("nomero").value
  vahe = window.vahe + tulu
  document.getElementById("vahe").innerHTML = vahe
}

function miinus() {
  var btn = document.createElement("p");
  btn.classList.add('negative')
  btn.innerHTML = document.getElementById("nomero").value
  document.getElementById("kulud_kokku").appendChild(btn)
  var tulu = document.getElementById("nomero").value;
  vahe = window.vahe - tulu
  document.getElementById("vahe").innerHTML = vahe
}