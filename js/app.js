const menu = document.querySelector('.menu')
const linksContainer = document.querySelector('.links-container')


menu.addEventListener('click',() => {
    linksContainer.classList.toggle('show-links')
})