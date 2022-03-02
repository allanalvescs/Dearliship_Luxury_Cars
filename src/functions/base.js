import { JSON_datas } from "../dataBase/storeCar.js";
const data_cars = JSON.parse(JSON_datas);

const filterBrand = (brand) => {
    const ouptput = data_cars.filter((value) => {
        if (value.brand.toLowerCase() === brand.toLowerCase()) {
            return value
        }
    });

    return ouptput
}

const randomsection = () => {
    const copyArray = data_cars.map((value) => value)

    const output = [];
    for (let counter = 0; counter < 7; counter++) {
        let randomCar = Math.floor(Math.random() * copyArray.length)
        output.push(copyArray[randomCar]);
        copyArray.splice(randomCar, 1)
    }

    return output
}


function createElementHTML(parent, nameElem, content) {
    const element_HTML = document.createElement(nameElem);
    element_HTML.innerText = content;

    parent.appendChild(element_HTML);

    return element_HTML
}

function createImage(parent, path, figcapition) {
    const image = document.createElement('img')
    image.src = path
    image.alt = figcapition

    parent.appendChild(image)
}

export { createElementHTML, createImage, filterBrand, randomsection }