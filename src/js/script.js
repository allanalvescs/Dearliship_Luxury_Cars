import { searchUser } from "../js/functions/app_Header.js";
import { createRandomSection } from "./functions/app_sectionCars.js";
import { createSection, filterBrand } from "./functions/base.js";

const started_page = document.getElementById('started_page');
const btn_search = document.getElementById('button_research');

started_page.addEventListener('click', () => {
    const page_dearliship = document.getElementById('dearliship_page');
    const page = document.getElementById('frontPage')
    page.classList.remove('flip');
    page_dearliship.classList.remove('remove')
    page_dearliship.classList.add('page')

});

btn_search.addEventListener('click', searchUser);

createRandomSection();

const list_bmw_cars = filterBrand('bmw');
const list_merc_cars = filterBrand('mercedes');
const list_audi_cars = filterBrand('audi');

createSection('list-BMW', list_bmw_cars);
createSection('list-mercedes', list_merc_cars);
createSection('list-audi', list_audi_cars);