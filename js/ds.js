import { header, footer, Content} from "./common.js";

header();
footer();

const body = document.querySelector('.main-content .container')

const digitalSignage = [
    {
        id: 1,
        title: 'Digital Advertising Networks',
        subtitle: 'Transportation | Hospitality | Retail | Out of Home',
        text: `Digital advertising offers the opportunity for integrated plans and the same flexibility for contextually relevant and timely creative opportunities. Engage customers where they are with our proven content, deployment, and monitoring solutions.
        <br> <br>
        With Versavvy Media's digital signage solutions you have full control over content and what each, screen is displaying. From sending valuable information to screens, to sharing live local news and weather forecasts, digital signage can serve as your digital customer service representative. ` ,
        img: `<img src="./assets/ds/2.jpeg" alt="">`,
        bgimg: `<img src="./assets/ds/megaphone.png" class="mega" alt="">`
    },
    {
        id: 2,
        title: 'Corporate Signage Solutions',
        subtitle: 'Video Wall | Way Finding | Meeting Rooms',
        text: `By leveraging best in class digital signage software and hardware solutions, you will be able to display impressive graphics, video, real-time information, internal corporate scrolling news tickers, and even add customized messages welcoming your clients and guests. Versavvy Media can help you simplify the meeting room status and booking experience while increasing productivity. Digital Signage for corporate communications makes it easier for you to better connect with both your employees and customers.`,
        img: `<img src="./assets/ds/1.jpg" alt="">`,
        bgimg: `<img src="./assets/ds/dots.png" class="dots" alt="">`
    },
    {
        id: 3,
        title: 'Enterprise IPTV',
        subtitle: 'Encode | Decode | Stream Transport',
        text: `Versavvy Media can select and deploy a scalable IPTV platform, enabling your organization to provide information, entertainment and tailored messaging. Capture and ingest content from a wide range of sources, encode and redistribute them across an IP network to any screen, mobile app or standalone TV feed. Highly customizable and available in a number of styles, and a perfect solution for hotel TV deployments, corporate offices, hospitals,  commercial vessels and industrial complexes.`,
        img: `<img src="./assets/ds/3.jpg" alt="">`,
    }
]




const ds = new Content(digitalSignage)
ds.mapContent(body)