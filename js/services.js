import { header, footer, Content} from "./common.js";

header();
footer();
const body = document.querySelector('.main-content .container')
const service = [
    {
        id: 1,
        title: 'Consulting',
        class: 'consult',
        subtitle: '',
        text: `Versavvy Media PLC Consulting and Design team has made deciding on technology upgrades and getting the most out of your existing facility easier than ever with our Versavvy full circle consulting packages. We founded our Consulting and Design team to enable you to make the right decisions on technology upgrades and refreshes, in addition to new workflows for your business. We also assist with the training of your team, plus adding on-site support during your deployment phase. ` ,
        img: `<img src="./assets/service/Professional Service.jpg" alt="">`,
        bgimg: `<img src="./assets/service/consulting.png" class="consulting" alt="">`
    },
    {
        id: 2,
        title: 'Project Management',
        class: 'Project',
        subtitle: '',
        text: `As part of the Versavvy Media full circle process, we provide our clients and partners with an online portal where they can review the project schedule and project status in real time. This includes a comprehensive project dashboard with key project metrics and milestones all in one place. Once the on-site installation begins, our team of experienced technicians work to implement the design and project plan.`,
        
        img: `<img src="./assets/service/project-management.jpg" alt="">`,
        bgimg: `<img src="./assets/service/design.png" class="design" alt="">`
    },
    {
        id: 3,
        title: 'Integration',
        class: 'integration1',
        subtitle: '',
        text: `Our team takes a best practices approach for each client, resulting in a custom-tailored solution to meet your specific objectives. Versavvy provides an encompassing range of services, from complex turnkey systems builds to simple upgrades, add-ons, and retrofits. Our goal is to take your vision and make it a reality. In engineer speak, we turn your project requirements into Statements of Work & CAD plans.`,
        img: `<img src="./assets/service/Integration.jpg" alt="">`,
        bgimg: `<img src="./assets/service/integration.png" class="integration" alt="">`
    }
]

const ds = new Content(service)
ds.mapContent(body)