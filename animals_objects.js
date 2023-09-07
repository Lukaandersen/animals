"use strict";

window.addEventListener("DOMContentLoaded", start);

const Animal = {
  name: "-deafault name",
  desc: "-no descriptoin",
  type: "-unknown",
  age: 0,
};

const allAnimals = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    const animal = Object.create(Animal);
    const fullname = jsonObject.fullname;
    const firstSpace = fullname.indexOf(" ");
    const secondSpace = fullname.indexOf(" ", firstSpace + 1);
    const lastSpace = fullname.lastIndexOf(" ");

    const name = fullname.substring(0, firstSpace);
    const desc = fullname.substring(secondSpace + 1, lastSpace);
    const type = fullname.substring(lastSpace + 1);

    animal.name = name;
    animal.desc = desc;
    animal.type = type;
    animal.age = jsonObject.age;

    allAnimals.push(animal);

    console.log(
      `name: _${name}_
    desc: _${desc}_ 
    type: _${type}_ `
    );
    // TODO: MISSING CODE HERE !!!
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

document.querySelector("#onlyDogs").addEventListener("click", dogsclicked);
document.querySelector("#onlyCats").addEventListener("click", catsclicked);
document.querySelector("#All").addEventListener("click", allclicked);

function dogsclicked() {
  console.log("catsclicked");
}

function catsclicked() {
  console.log("catsclicked");
}
function allclicked() {
  console.log("catsclicked");
}

// noget med Display kun type=cats?
