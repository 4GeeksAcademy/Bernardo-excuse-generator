/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
-function generarExcusa() {
  var actividades = [
    "Mi perro",
    "Mi gato",
    "Mi hermano",
    "Mi vecino",
    "Mi amigo",
  ];
  var excusas = ["se comió", "rompió", "escondió", "tiró", "borró"];
  var objetos = [
    "mi tarea",
    "mi libro",
    "mi teléfono",
    "mi computadora",
    "mis llaves",
  ];
  var porques = [
    "despues de la clase",
    "ahora mismo",
    "justo cuando termine",
    "durante el almuerzo",
    "mientras oraba",
  ];

  var indiceActividad = Math.floor(Math.random() * actividades.length);
  var indiceExcusa = Math.floor(Math.random() * excusas.length);
  var indiceObjeto = Math.floor(Math.random() * objetos.length);
  var indicePorque = Math.floor(Math.random() * porques.length);

  var excusa =
    actividades[indiceActividad] +
    " " +
    excusas[indiceExcusa] +
    " " +
    objetos[indiceObjeto] +
    " " +
    porques[indicePorque] +
    ".";

    return excusa;
  };
  
  var excusaGenerada = generarExcusa();
  console.log(excusaGenerada);

  
  
  
  
  




























