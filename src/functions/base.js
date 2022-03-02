import { JSON_datas } from "../dataBase/storeCar.js";

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

export { createElementHTML, createImage }