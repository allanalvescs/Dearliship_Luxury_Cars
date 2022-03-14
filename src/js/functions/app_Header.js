function searchUser() {
    const input_search = document.getElementById("box_input");
    input_search.classList.replace("remove", "box_input");
}

function closeInput() {
    const input_search = document.getElementById("box_input");
    input_search.classList.replace("box_input", "remove")
}

function openMenu() {
    const item_menu_mobile = document.getElementById("menu_mobile");
    const ico_menu = document.querySelector(".ico_menu");
    ico_menu.classList.replace("ico_menu", "remove")
    item_menu_mobile.classList.replace("remove", "menu_mobile")
}

function closeMenu() {
    const menu_mobile = document.getElementById("menu_mobile");
    const ico_menu = document.querySelector(".remove");
    ico_menu.classList.replace("remove", "ico_menu")
    menu_mobile.classList.replace("menu_mobile", "remove")
}
export { searchUser, closeInput, openMenu, closeMenu }