let itarea = document.getElementById("tarea");
let itiempoProgramado = document.getElementById("tiempoProgramado");
let itiempoEmpleado = document.getElementById("tiempoEmpleado");
let idescripcion = document.getElementById("descripcion");
let idatatable = document.getElementById("datatable");

let borrar = document.getElementById("borrarCookie");
let grabar = document.getElementById("grabarCookie");
let leer = document.getElementById("leerCookie");
let index = 0;
let Arraystorage = new Array();

grabar.addEventListener("click", grabardatos, false);
borrar.addEventListener("click", borrardatos, false);
leer.addEventListener("click", leerdatos, false);

function grabardatos() {
  Arraystorage.push(
    itarea.value,
    itiempoProgramado.value,
    itiempoEmpleado.value,
    idescripcion.value
  );
  console.log(Arraystorage);
  //console.log(Arraystorage);
  //console.log(Arraystorage.slice(0, 4));

  let joinArr = Arraystorage.splice(0, 4).join("*/*");
  console.log(joinArr);

  localStorage.setItem(index++, joinArr);
  itarea.value = "";
  itiempoProgramado.value = "";
  itiempoEmpleado.value = "";
  idescripcion.value = "";
}

function borrardatos() {
  idatatable.innerHTML = "";
  localStorage.clear();
}

function leerdatos() {
  idatatable.innerHTML = "";

  for (let index = 0; index < localStorage.length; index++) {
    idatatable.innerHTML += `
    <tr>
    <td>${index}</td>
    <td>${localStorage.getItem(index).split("*/*")[0]}</td>
    <td>${localStorage.getItem(index).split("*/*")[1]}</td>
    <td>${localStorage.getItem(index).split("*/*")[2]}</td>
    <td>${localStorage.getItem(index).split("*/*")[3]}</td>
    </tr>
 `;
  }
}
