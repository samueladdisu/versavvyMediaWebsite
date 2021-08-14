import { footer } from "./common.js";
const menu = document.querySelector('.menu')
const linksContainer = document.querySelector('.links-container')
const dropdown = document.querySelector('.drop-down')
const dropdownContent = document.querySelector('.drop-down-link')
menu.addEventListener('click',() => {
    linksContainer.classList.toggle('show-links')
})
dropdown.addEventListener('mouseenter', () => {
    
    dropdownContent.classList.add('display-links')
})
dropdown.addEventListener('mouseleave', () => {

    dropdownContent.classList.remove('display-links')
})
footer();