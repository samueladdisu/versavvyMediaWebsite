import { header, footer, Content} from "./common.js";

header();
footer();
const body = document.querySelector('.main-content .container')
const storage = [
    {
        id: 1,
        class: 'about-text',
        title: 'about us',
        subtitle: '',
        text: `Established in 2020, our goal is to provide every client personable and professional service. We understand the value in delivering creative technologies, implementation, and timely support, in order to make a quantifiable impact on our clients business. Our partners rely on us to  bridge the gap between those who produce technology and those who use it.
        ` ,
        img: `<img src="./assets/storage/4.jpg" alt="">`,
        bgimg: `<img src="./assets/about/v.png" class="v" alt="">`
    }
]

const ds = new Content(storage)
ds.mapContent(body)