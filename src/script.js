// import { headerMobileVerion } from "./functions/app_Header.js";
// import { headerDesktopVersion } from "./functions/app_Header.js";

const started_page = document.getElementById('started_page');

const body = document.querySelector('body');
const proprietes_element = body.getClientRects().item(body)
const size_screen = proprietes_element.width

started_page.addEventListener('click', () => {
    const page = document.getElementById('frontPage')
    page.classList.remove('flip');

});
