import { randomsection } from "./base.js";


function createRandomSection() {
    const array_cars = randomsection()
    const itens_cars = document.querySelectorAll('.item_car');

    itens_cars.forEach((value, index) => value.src = array_cars[index].imageCar);
}


export { createRandomSection }