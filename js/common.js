function header(){
    const header = document.querySelector('.header')
    header.innerHTML = ` <nav class="nav">
                        <div class="header-container">
                        <div class="nav-header">
                            <div class="logo">
                                <img src="./assets/logos/Versavvy_whlogo.svg" alt="Versavvy Media Logo">
                        
                            </div>
                            <div class="menu">
                                <img src="./assets/menu.svg" alt="">
                            </div>
                        </div>
                        
                        <div class="links-container">
                            
                        <ul class="nav-links">
                            <li><a href="./index.html" class="scroll-link">HOME</a></li>
                            <li class="drop-down">
                                <a href="#solutions" class="scroll-link solution"> SOLUTIONS <i class='bx bx-caret-down'></i> </a>
                                <ul class="drop-down-link">
                                    <li><a href="./ds.html">Digital Signage</a></li>
                                    <li><a href="./DM.html">Digital Marketing</a></li>
                                    <li><a href="./broadcast.html">Broadcast</a></li>
                                    <li><a href="./storage.html">Storage </a></li>
                                    <li><a href="./ott.html">OTT</a></li>
                                </ul>
                            
                            </li>
                            <li><a href="./services.html" class="scroll-link">SERVICES</a></li>
                            <li><a href="./about.html" class="scroll-link">ABOUT US</a></li>
                            <li><a href="./contact.html" class="scroll-link">CONTACT</a></li>
                        </ul>

                        </div>
                        </div>
                        </nav>`
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
}

function footer(){
    const footer = document.querySelector('.footer')
    footer.innerHTML = ` <img src="./assets/footer_wave.svg" class="wave" alt="">
<div class="footer-wrapper">
<div class="container">
    <div class="upper-footer">
        <div class="address">
            <img src="./assets/logos/Versavvy_whlogo.svg" alt="">
            <div class="address-content">
            <div>
                <i class='bx bx-phone-call'></i>
                <p> <a href="tel:+251115574409">+251 11 557 4409</a></p>
            </div>

            <div>
                <i class='bx bx-envelope-open' ></i>
                <aside>
                <p><a href="mailto:info@versavvymedia.com">info@versavvymedia.com</a> </p>
                <p><a href="mailto:sales@versavvymedia.com">sales@versavvymedia.com</a></p>
                </aside>
            </div>

            <div class="oly">
                <i class='bx bx-map' ></i>
                <p>Sterling Bldg. | First Floor
                    Olympia, Gazebo Roundabout
                    Addis Ababa, Ethiopia</p>
            </div>
            </div>
        </div>

        <div class="mission">
            <h3 class="footer-title">Our Mission</h3>
            <p>To design, integrate and support cutting edge media and communication technologies for a connected world.</p>

            <div class="social-icons">
            <a href="https://www.instagram.com/versavvymedia/" target="_blank"><i class='bx bxl-instagram' ></i></a>
            <a href="https://t.me/PetrosTsegaye" target="_blank"><i class='bx bxl-telegram' ></i></a>
            <a href="https://www.facebook.com/VersavvyMediaPLC" target="_blank"><i class='bx bxl-facebook-circle' ></i></a>
            <a href="https://www.linkedin.com/company/versavvy-media" target="_blank"><i class='bx bxl-linkedin-square' ></i></a>
            </div>
        </div>
    </div>
    <div class="lower-footer">
        <div class="quick-links">
            <h3 class="footer-title">quick links</h3>
            
            <ul>
                <li><a href="./index.html">HOME</a></li>
                <li><a href="./services.html">SERVICES</a></li>
                <li><a href="./contact.html">CONTACT</a></li>
                <li><a href="./about.html">ABOUT</a></li>
            </ul>
        </div>
        <div class="solution-links">
            <h3 class="footer-title">solutions</h3>
            
            <ul>
            <li><a href="./ds.html">DIGITAL SIGNAGE</a></li>
            <li><a href="./DM.html">DIGITAL MARKETING</a></li>
            <li><a href="./broadcast.html">BROADCAST</a></li>
            <li><a href="./storage.html">STORAGE</a></li>
            <li><a href="./ott.html">OTT</a></li>
            </ul>
        </div>
    </div>

    
</div>
<p class="copy">Copyright &copy; 2021 Versavvy Media PLC.</p>
</div>
`
}

class Content {
    constructor(data){
        this.data = data;
    }

    mapContent(element){
        const content = this.data.map(items => {
            if((items.id % 2) !== 0 ){
                return `<div class="ds-card">
                <div class="ds-card-top ${items.class ? items.class : ''}" id="${items.id ? items.id : ""}">
                    <h1 class="ds-card-title">
                        ${items.title}
                    </h1>
                    <p class="${items.subtitle ? "ds-card-subtitle" : ""}">
                       ${items.subtitle}
                    </p>
                </div>
                <div class="ds-card-content row">
               ${items.bgimg ? items.bgimg : ""}
                    <div class="col-md-5 col-lg-6">
                        <p class="ds-card-text ${items.class ? items.class : ""}">
                           ${items.text}
                        </p>
                    </div>
                    
                    <div class="col-md-5 col-lg-6 col-lg-offset-0 col-md-offset-1">
                        <div class="ds-img ">
                            ${items.img}
                        </div>
                    </div>
                  
                </div>
            </div>`
        
            }
            else{
                return `
                <div class="ds-card">
                    <div class="ds-card-top ${items.class ? items.class : ''}">
                        <h1 class="ds-card-title">
                            ${items.title}
                        </h1>
                        <p class="ds-card-subtitle">
                           ${items.subtitle}
                        </p>
                    </div>
                    <div class="ds-card-reverse-content row">
                    ${items.bgimg ? items.bgimg : ""}
                        <div class="col-md-5 col-lg-6">
                            <div class="ds-img ">
                                ${items.img}
                            </div>
                        </div>
                        <div class="col-md-5 col-lg-6 col-md-offset-1 col-lg-offset-0">
                            <div class="ds-card-text ">
                               ${items.text} 
                            </div>
                        </div>
                        
                       
                      
                    </div>
                </div>`
            }
        }).join('')

        element.innerHTML = content
    }
}  


export { header, footer, Content}