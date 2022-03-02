const started_page = document.getElementById('started_page')

started_page.addEventListener('click', () => {
    const page = document.getElementById('frontPage')
    page.classList.remove('flip')
})