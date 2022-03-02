import { createElementHTML } from "./base.js";
import { createImage } from "./base.js";

function profileSectionMobile() {
    const header_element = document.querySelector('header');

    const div_profile = createElementHTML(header_element, 'div', null)
    const div_welcoming_user = createElementHTML(div_profile, 'div', null)

    createImage(div_profile, './src/img/imgPage/user.png', 'profile');
    createElementHTML(div_welcoming_user, 'span', 'Welcome');
    createElementHTML(div_welcoming_user, 'p', 'none user');

    div_welcoming_user.classList.add('name_user')
    div_profile.classList.add('box_profile');
}

function mainMenuMobile() {
    const header_element = document.querySelector('header');
    const navegation_menu = createElementHTML(header_element, 'nav', null);

    const box_buttons = createElementHTML(navegation_menu, 'div', null)
    createElementHTML(box_buttons, 'button', 'Sing Up');
    createElementHTML(box_buttons, 'button', 'Log in');

    const box_ico_menu = createElementHTML(navegation_menu, 'figure', null);
    createImage(box_ico_menu, './src/img/imgPage/menuIco.png', 'ico')

    box_buttons.classList.add('box_buttons');
    box_ico_menu.classList.add('ico_menu')
    navegation_menu.classList.add('main_menu');
}

function mainMenuDesktop() {
    const header_element = document.querySelector('header')
    const nav_menu = createElementHTML(header_element, 'nav', null);
    nav_menu.classList.add('main_menu')

    const listMenu = createElementHTML(nav_menu, 'ul', null);
    listItemMenu(listMenu, ['models', 'client service', 'about', 'contact']);
    const box_buttons = createElementHTML(nav_menu, 'div', null);

    createElementHTML(box_buttons, 'button', 'Sing Up');
    createElementHTML(box_buttons, 'button', 'Log in');

    box_buttons.classList.add('box_buttons');
}

function listItemMenu(parent, array) {
    for (let index = 0; index < array.length; index++) {
        const li = document.createElement('li');
        li.innerText = array[index]

        parent.appendChild(li)
    }
}

function headerMobileVerion() {
    profileSectionMobile();
    mainMenuMobile();
}

function headerDesktopVersion() {
    const header_element = document.querySelector('header');
    header_element.style.backgroundColor = '#fff'
    profileSectionMobile()
    mainMenuDesktop()
}

export { headerMobileVerion, headerDesktopVersion }
