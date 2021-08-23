import { header, footer } from "./common.js"

header()
footer()

// SOLUTION CARDS 

const solutionCardData = [
    {
        id: "card1",
        title: 'Digital Signage',
        list: [
            'Digital Advertising Networks',
            'Corporate Signage Solutions',
            'Enterprise IPTV'
        ],
        img: `./assets/digitalSignage2.jpg`,
        url: `./ds.html`
    },
    {
        id: "card2",
        title: 'Digital Marketing',
        list: [
            'Website Design',
            'Search Engine Optimization',
            'Social Media Activation'
        ],
        img: `./assets/digitalMarketing.jpg`,
        url: `./DM.html`  
    },
    {
        id: "card3",
        title: 'Broadcast',
        list: [
            'Live Production Solutions',
            'Live Streaming Solutions'
        ],
        img: `./assets/broadcast/1.jpg`,
        url: `./broadcast.html`  
    },
    {
        id: "card4",
        title: 'Storage',
        list: [
            'Enterprise Storage Solutions',
            'Digital Asset Management',
            'Virtualized Data Center Solutions'
        ],
        img: `./assets/storage/1.jpg`,
        url: `./storage.html`  
    },
    {
        id: "card5",
        title: 'OTT',
        list: [
            'Live Streaming',
        ],
        img: `./assets/ott/1.jpg`,
        url: `./ott.html`  
    }

]
const solutionCard = document.querySelector('.solutions-card')

let solutionCardContent = solutionCardData.map(item =>{
    return `<div class="card ${item.id}">
    <img class="bg-card" src="${item.img}" alt="">
    <div class="card-content">
       <h3>${item.title}</h3>
       <ul>
        ${item.list.map(lists =>{
           return `<li>
           <img src="" alt="">
           ${lists}
        </li>` 
        }).join('')}
       </ul>
       <a href="${item.url}" class="btn btn-outline-secondary">Learn More</a>
    </div>
 </div>`
}).join('')

solutionCard.innerHTML = solutionCardContent

const logoContainer = document.querySelector('.logo-container')

logoContainer.addEventListener('mouseover', e => {
    const img = e.target.getAttribute('src');
    if(img   === "./assets/logos/Battery World.svg"){
        e.target.setAttribute('src', "./assets/logos/Battery World_real.svg")
    }else if (img === "./assets/logos/safecare_vector.svg"){
        e.target.setAttribute('src',"./assets/logos/safecare_vector_real.svg")
    }else if (img === "./assets/logos/prime_media.svg"){
        e.target.setAttribute('src',"./assets/logos/prime_media_real.svg")
    }else if(img === "./assets/logos/TOMOCA.svg"){
        e.target.setAttribute('src', "./assets/logos/TOMOCA_real.svg")
    }else if(img === "./assets/logos/elnes.svg"){
        e.target.setAttribute('src',"./assets/logos/elnes_real.svg")
    }
})

logoContainer.addEventListener('mouseout', e => {
    const img = e.target.getAttribute('src');
    if(img   === "./assets/logos/Battery World_real.svg"){
        e.target.setAttribute('src', "./assets/logos/Battery World.svg")
    }else if (img === "./assets/logos/safecare_vector_real.svg"){
        e.target.setAttribute('src',"./assets/logos/safecare_vector.svg")
    }else if (img === "./assets/logos/prime_media_real.svg"){
        e.target.setAttribute('src',"./assets/logos/prime_media.svg")
    }else if(img === "./assets/logos/TOMOCA_real.svg"){
        e.target.setAttribute('src', "./assets/logos/TOMOCA.svg")
    }else if(img === "./assets/logos/elnes_real.svg"){
        e.target.setAttribute('src',"./assets/logos/elnes.svg")
    }
})