"use strict"
// function
// Function declaration
// Arrow 

// function logger() {
//     console.log("This is a function");
// };
// logger();

// const calc = () => {
//     console.log("This is a cb");
// };
// calc();

const nameRobot = prompt("Ismingizni kiriting: ");
const colorRobot = prompt("Rangizni kiriting: ");
const modelRobot = prompt("Modelni kiriting: ");

function Robot(name, color, model) {
    console.log(`My name is ${name}. Color: ${color}. Model: ${model}`);
}
// Robot("Iskandar", "White", "GRD-2000");
Robot(nameRobot, colorRobot, modelRobot);
