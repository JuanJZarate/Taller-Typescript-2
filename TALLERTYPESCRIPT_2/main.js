import { series } from "./data.js";
const tbody = document.getElementById("series");
const promedioEl = document.getElementById("promedio");
const card = document.getElementById("detalle");
const img = document.getElementById("serie-imagen");
const titulo = document.getElementById("serie-titulo");
const descripcion = document.getElementById("serie-descripcion");
const link = document.getElementById("serie-link");
let suma = 0;
for (let i = 0; i < series.length; i++) {
    const s = series[i];
    const fila = document.createElement("tr");
    fila.innerHTML =
        "<td>" + s.id + "</td>" +
            "<td>" + s.name + "</td>" +
            "<td>" + s.channel + "</td>" +
            "<td>" + s.seasons + "</td>";
    fila.addEventListener("click", function () {
        card.classList.remove("d-none");
        img.src = s.image;
        titulo.textContent = s.name;
        descripcion.textContent = s.description;
        link.href = s.link;
        link.textContent = "More info";
    });
    tbody.appendChild(fila);
    suma += s.seasons;
}
const promedio = Math.round((suma / series.length) * 100) / 100;
promedioEl.textContent = "Seasons average: " + promedio;
