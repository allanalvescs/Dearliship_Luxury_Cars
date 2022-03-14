import { closeInput, closeMenu, openMenu, searchUser } from "../js/functions/app_Header.js";
import { createRandomSection } from "./functions/app_sectionCars.js";
import { createSection, filterBrand } from "./functions/base.js";

const started_page = document.getElementById("started_page");
started_page.addEventListener('click', () => {
    const page_dearliship = document.getElementById('dearliship_page');
    const page = document.getElementById('frontPage')
    page.classList.remove('flip');
    page_dearliship.classList.remove('remove')
    page_dearliship.classList.add('page')

});

const btn_search = document.getElementById("button_research");
btn_search.addEventListener('click', searchUser);

const close_input = document.getElementById("close-input");
close_input.addEventListener('click', closeInput);

const close_menu = document.getElementById("close-menu");
close_menu.addEventListener("click", closeMenu);

const menu_hamburguer = document.getElementById("menu");
menu_hamburguer.addEventListener('click', openMenu);

createRandomSection();

const list_bmw_cars = filterBrand('bmw');
const list_merc_cars = filterBrand('mercedes');
const list_audi_cars = filterBrand('audi');

createSection('list-BMW', list_bmw_cars);
createSection('list-mercedes', list_merc_cars);
createSection('list-audi', list_audi_cars);