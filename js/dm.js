import { header, footer } from "./common.js";
header();

const dropdown = document.querySelector(".drop-down");
const dropdownContent = document.querySelector(".drop-down-link");

dropdown.addEventListener("mouseenter", () => {
  dropdownContent.classList.add("display-links");
});
dropdown.addEventListener("mouseleave", () => {
  dropdownContent.classList.remove("display-links");
});

footer();

const toggleModal = document.querySelector(".web");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const closeGallery = document.querySelector(".close-gallery");
// const hotel = document.querySelector('.hotel')
const gallery = document.querySelector(".gallery");
const container = document.querySelector(".backdrop");
toggleModal.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});


container.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

const template = [
  {
    img: "./assets/hotel/home-full.png",
    category: "hotel",
  },
  {
    img: "./assets/hotel/special-full.png",
    category: "hotel",
  },
  {
    img: "./assets/hotel/meeting-full.png",
    category: "hotel",
  },
  {
    img: "./assets/construction/Home-full.png" ,
    category: "construction",
  },
  {
    img: "./assets/construction/Projects-full.png",
    category: "construction",
  },
  {
    img: "./assets/construction/Service-full.png",
    category: "construction",
  },
  {
    img: "./assets/fastfood/home-full.png",
    category: "fastFood",
  },
  {
    img: "./assets/fastfood/reservation-full.png",
    category: "fastFood",
  },
  {
    img: "./assets/fastfood/special-full.png" ,
    category: "fastFood",
  },
  {
    img: "./assets/realEstate/home-full.png",
    category: "realEstate",
  },
  {
    img: "./assets/realEstate/about-full.png",
    category: "realEstate",
  },
  {
    img: "./assets/realEstate/news-full.png",
    category: "realEstate",
  },
  {
    img: "./assets/auto/Home.png",
    category: "auto",
  },
  {
    img: "./assets/auto/New.png",
    category: "auto",
  },
  {
    img: "./assets/auto/Special.png",
    category: "auto",
  },
  {
    img: "./assets/pharmacy/Home.png",
    category: "law",
  },
  {
    img: "./assets/pharmacy/product.png",
    category: "law",
  },
  {
    img: "./assets/pharmacy/invest.png",
    category: "law",
  },
];

const imgContainer = document.querySelector(".img-container");
const sliderContainer = document.querySelector(".slider-container");

imgContainer.addEventListener("click", (e) => {
  
  gallery.style.display = "block";
  
  
  
  const nextBtn = document.querySelector(".nextBtn");
  const prevBtn = document.querySelector(".prevBtn");
  let counter = 0;
  nextBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    console.log('next',counter);
    counter++;
    carousel();
  });
  counter = 0;
  prevBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();

    counter--;
    carousel();
    console.log('prev',counter);
  });
  let finalTemplate = template.map((item) => {
    if (e.target.dataset.id === item.category) {
      return `<div class="slide">
          <img src="${item.img}" class="slide-img" alt="">
        </div>`;
    }
  })
  .join("");
  sliderContainer.innerHTML = finalTemplate
  const slides = document.querySelectorAll(".slide");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
  function carousel() {
      // working with slides
  

    if (counter < slides.length-1 ) {
      nextBtn.style.display = "block";
      // console.log(counter);
    } else{
      nextBtn.style.display = "none";
    }
    if (counter > 0) {
      prevBtn.style.display = "block";
      // console.log(counter);
    } else{
      prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }

  prevBtn.style.display = "none";
  console.log(counter);
  closeGallery.addEventListener("click", () => {
    gallery.style.display = "none";
    nextBtn.style.display = "block";
  });
  
});

