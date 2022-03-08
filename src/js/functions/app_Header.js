function searchUser() {
    const input_search = document.getElementById('input-search');
    input_search.classList.remove('remove');
    input_search.classList.add('search')
}

export { searchUser }