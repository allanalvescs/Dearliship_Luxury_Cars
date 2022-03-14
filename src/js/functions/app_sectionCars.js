import { createElementHTML, createImage, randomsection } from "./base.js";


function createRandomSection() {
    const array_cars = randomsection()
    const itens_cars = document.querySelectorAll('.item_car');
    const infor_list_random_car = document.querySelectorAll(".infor li");

    itens_cars.forEach((value, index) => value.src = array_cars[index].imageCar);
    infor_list_random_car.forEach((value, index) => {
        const figure = createElementHTML(value, "figure", null);
        createImage(figure, array_cars[index].image, array_cars[index].brand);
        const div_description = createElementHTML(value, "div", null);
        div_description.classList.add("description")
        createElementHTML(div_description, 'p', array_cars[index].name);
        createElementHTML(div_description, "span", "$" + array_cars[index].price + ",00")
    })
}


export { createRandomSection }