import { header,footer,Content } from "./common.js"

header();
footer()
const body = document.querySelector('.main-content .container')
const broadcast = [
    {
        id: 1,
        title: 'Live Production Solutions',
        subtitle: 'Master Control | Broadcast Infrastructure | Graphics',
        text: `Versavvy Media specializes in integrating and delivering control room and live production solutions. We pride ourselves in designing media workflows that leverage the latest production and news room solutions. We understand that there is not a one-size fits all solution for all our clients. We help take the guess work out of selecting and implementing complex broadcast solutions.`,
        img: `<img src="./assets/broadcast/1.jpg" alt=""> `,
        bgimg: ` <img src="./assets/broadcast/video.png" class="video" alt="">
        <img src="./assets/broadcast/blob-plus.png" class="blob" alt=""> `
    },
    {
        id: 2,
        title: 'Live Streaming Solutions',
        subtitle: 'Encode | Decode | Stream Transport',
        text: `Versavvy Media can help you stream high-quality video and audio to any internet connected device. Our engineering teams will design, and deploy a best in class solution that utilizes a wide range of popular encoders, decoders, and stream management solutions. Our goal is to ensure you're viewers gain access to high quality, reliable live productions to all there devices, anytime, anywhere! `,
        img: `<img src="./assets/broadcast/2.jpg" alt=""> `,
        bgimg: `<img src="./assets/broadcast/LIVE.png" class="live" alt="">`
    }
]


const br = new Content(broadcast)
br.mapContent(body)