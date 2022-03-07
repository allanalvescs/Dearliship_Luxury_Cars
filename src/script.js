import { searchUser } from "./functions/app_Header.js";

const started_page = document.getElementById('started_page');
const btn_search = document.getElementById('button_research');

started_page.addEventListener('click', () => {
    const page = document.getElementById('frontPage')
    page.classList.remove('flip');

});

btn_search.addEventListener('click', searchUser)