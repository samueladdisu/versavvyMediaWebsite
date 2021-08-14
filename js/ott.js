import { header, footer, Content} from "./common.js";

header();
footer();

const body = document.querySelector('.main-content .container')
const ott = [
    {
        title: 'Live Streaming',
        subtitle: 'VOD | IPTV | OTT',
        text: `Today's viewers expect to access both live streaming and previously-aired episodes, at any time and on any device. Targeted advertising can unleash additional revenue streams by selling advertising space inside the user interface. Versavvy Media can help you deploy ad decision services based on your user demographics, so users are presented ads based on their interests and needs. 
        <br> <br> Our infrastructure consultancy is aimed at identifying the end-customer journey and the different touch points.
        <br> <br> 
        We will work with you and investigate all the workflows and objectives required to craft a solution that identifies with your organizational goals and customers expectations. We set you up for long-term success by having open and unbiased partnerships with a wide range of technology providers, enabling you to scale and customize your offering as the market evolves.
`,
        img: `<img src="./assets/ott/1.jpg" alt="">`,
        bgimg: `<img src="./assets/ott/tv.png" class="tv">`
    }
]

const ds = new Content(ott)
ds.mapContent(body)