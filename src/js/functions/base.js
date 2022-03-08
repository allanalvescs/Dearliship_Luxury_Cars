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

    parent.appendChild(image);

    return image
}

function createInformation(information1, information2) {
    const div_information = document.createElement('div');
    const div_price = createElementHTML(div_information, 'div', null);
    const div_rate = createElementHTML(div_information, 'div', null);

    createElementHTML(div_price, 'span', 'Price');
    createElementHTML(div_price, 'p', '$' + information1 + ',00');
    const star = createImage(div_rate, './src/img/imgPage/satisfy.png', 'star');
    createElementHTML(div_rate, 'p', information2);

    div_price.classList.add('box_price');
    div_rate.classList.add('box_rate');

    div_information.appendChild(div_price);
    div_information.appendChild(div_rate);
    div_information.classList.add('box_information');

    return div_information
}

function createSection(id, array) {
    const list = document.getElementById(id);
    array.forEach((value) => {
        const li = document.createElement('li');
        createElementHTML(li, 'h3', value.name);
        const figure = createElementHTML(li, 'figure', null)
        const imageCar = createImage(figure, value.imageCar, 'Cars BMW');
        imageCar.classList.add('imageCar');

        li.appendChild(createInformation(value.price, value.rate));
        li.classList.add('item-car')
        list.appendChild(li);
    });
}
export { createElementHTML, createImage, filterBrand, randomsection, createInformation, createSection }