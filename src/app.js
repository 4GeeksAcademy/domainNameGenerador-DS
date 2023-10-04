/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// ________ Variables ________

let pronombres = ["the", "our"];
let adjetivos = ["great", "big"];
let sustantivos = ["jogger", "racoon"];

// ________ Funciones ________

// Elegir elemento al azar del array
function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Generar nombre de dominio
function domainGenerator() {
  let pronombre = randomChoice(pronombres);
  let adjetivo = randomChoice(adjetivos);
  let sustantivo = randomChoice(sustantivos);

  return `${pronombre}${adjetivo}${sustantivo}.com`;
}

// Generar múltiples nombres únicos
function uniqueDomainGenerator(num) {
  const domains = [];

  for (let i = 0; i < num; i++) {
    let domain = "";
    do {
      domain = domainGenerator();
    } while (domains.includes(domain));
    domains.push(domain);
  }

  return domains;
}

// Obtener el div para inyectar el HTML
const body = document.querySelector("body");

const numDomains = 8;
const domains = uniqueDomainGenerator(numDomains);

// Inyectar en HTML
domains.forEach(domain => {
  const div = document.createElement("DIV");
  div.classList.add("px-5", "m-4");
  div.innerText = domain;

  body.appendChild(div);
});

console.log(domains);
