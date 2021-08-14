import { header, footer, Content} from "./common.js";

header();
footer();
const body = document.querySelector('.main-content .container')
const storage = [
    {
        id: 1,
        title: 'Enterprise Storage Solutions',
        subtitle: 'NAS| DAS | SAN',
        text: `To help companies cope with the challenge of managing massive volumes of unstructured data, flexible storage solutions are needed that work seamlessly with new and existing IT environment and also help lower CAPEX and OPEX costs. Every workload, application, or service has a unique storage requirement. Whether it’s speed, reliability, security, or simply capacity, Versavvy can help you choose the right storage solution for the workload. ` ,
        img: `<img src="./assets/storage/4.jpg" alt="">`,
        bgimg: `<img src="./assets/storage/server 1.png" class="server" alt="">`
    },
    {
        id: 2,
        title: 'Digital Asset Management',
        subtitle: 'MAM| DRM | Archiving',
        text: `
        Organizations that work daily with digital content development and distribution are in need of solutions that make workflows easier and digital asset delivery more efficient.For businesses, the importance of DAM comes down to practical business benefits and considerations:
        <ul>
        <li><i class='bx bxs-check-circle'></i> Productivity</li>
        <li><i class='bx bxs-check-circle'></i> Storage Efficiency</li>
        <li><i class='bx bxs-check-circle'></i> Protection of Rights and Permission</li>
        <li><i class='bx bxs-check-circle'></i> Compliance</li>
    </ul> 
    Versavvy DAM solutions can efficiently store, organize, manage, access and distribute your organization’s digital assets.`,
        
        img: ` <img src="./assets/storage/3.jpg" alt="">`,
        bgimg: `<img src="./assets/storage/digital-asset 1.png" class="digital-asset" alt="">`
    },
    {
        id: 3,
        title: 'Virtualized Data Center Solutions',
        subtitle: 'SDC| SDN | SDS ',
        text: `For telcos and communications service providers, Versavvy Media works with leading data center technologies that enable our clients to expand market reach into new areas. As demand for more efficient networks arise, we realize that our clients are pressed to shift their business models and focus on new pricing and delivery models. As software-defined data centers become more sophisticated, and in the process replace legacy hardware devices, our goal is strengthen your business by enabling infrastructure advancements in networking, storage, processing and security as flexible and scalable virtualized services. `,
        img: `<img src="./assets/storage/2.jpg" alt="">`,
        bgimg: `<img src="./assets/storage/cloud.png" class="cloud" alt="">`
    }
]

const ds = new Content(storage)
ds.mapContent(body)