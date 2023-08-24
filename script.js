'use-strict'

// Movies Array data 
let movies = [
  {
    name: 'the falcon and winter soldier',

    text: 'The Falcon and the Winter Soldier premiered on March 19, 2021, and ran for six episodes until April 23. It is part of Phase Four of the MCU. The series received positive reviews, with critics highlighting the actors social commentary but criticizing its pacing. It received several accolades, including five Primetime Emmy Award nominations. A feature film, Captain America: Brave New World (2024), co-written by Spellman, is in development as a continuation of the series.',
    image: 'images/slider 2.png',
  },
  {
    name: 'Loki',

    text: 'The second season of the American television series Loki, based on Marvel Comics featuring the character of the same name, sees Loki working with Mobius M. Mobius, Hunter B-15, and other members of the Time Variance Authority (TVA) to navigate the multiverse in order to find Sylvie, Ravonna Renslayer, and Miss Minutes. It is set in the Marvel Cinematic Universe (MCU), sharing continuity with the films of the franchise. The season is produced by Marvel Studios, with Eric Martin serving as head writer and Justin Benson and Aaron Moorhead leading the directing team.',
    image: 'images/slider 1.png',
  },
  {
    name: 'wanda vision',

    text: 'Three weeks after the events of Avengers: Endgame (2019),[1] Wanda Maximoff and Vision are living an idyllic suburban life in the town of Westview, New Jersey, trying to conceal their true natures. As their surroundings begin to move through different decades and they encounter various television tropes, the couple suspects that things are not as they seem.',
    image: 'images/slider 3.png',
  },
  {
    name: 'raya and last dragon ',

    text: 'The prosperous sub-continent of Kumandra is ravaged by the Druun, mindless spirits that turn every living thing in their path to stone. Sisu, the last surviving dragon, concentrates her magic into a gem and blasts the Druun away, reviving Kumandras people into five separate chiefdoms called Fang, Heart, Spine, Talon, and Tail, corresponding to their placement along a gigantic dragon-shaped river.',
    image: 'images/slider 4.png',
  },
  {
    name: 'luca',

    text: 'Luca, a sea monster, befriends Alberto, another one of his kind who takes him on a land adventure. He experiences an exciting summer while keeping his parents in the dark.',
    image: 'images/slider 5.png',
  },
];

// DOM document selecter
const cardContainers = [...document.querySelectorAll('.card-container')];
const preBtns = [...document.querySelectorAll('.pre-btn')];
const nextBtns = [...document.querySelectorAll('.next-btn')];
const cards = [...document.querySelectorAll('.card')];

const carousel = document.querySelector('.carousel');
const slider = document.querySelectorAll('.slider');
const search = document.querySelector('.search-box');

let sliders = [];
let slideIndex = 0;


const createSlide = () => {
  if(slideIndex >= movies.length){
    slideIndex = 0;
  }
// DOM Craetion
  const slide = document.createElement('div');
  const  imgElement = document.createElement('img');
  const content = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  //Attaching
  
  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].text));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);
  
  imgElement.src = movies[slideIndex].image;
  slideIndex++;
  
  slide.className = 'slider';
  content.className = 'slide-content';
  h1.className = 'movie-name';
  p.className = 'movie-text';
  
  sliders.push(slide);
  
  if(sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
  }
};
for(let i = 0; i < 3; i++ ) {
  createSlide();
}
setInterval(() => {
  createSlide();
},3000);


///////////////
// Slider btn 
  cardContainers.forEach((item,i) => {
  const containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;
  
  nextBtns[i].addEventListener('click',() => {
    item.scrollLeft += containerWidth - 200;

  })
  preBtns[i].addEventListener('click',() => {
    item.scrollLeft -= containerWidth + 200;

  })
});

// Scroll Behavier in nav 
document.querySelector('.nav__link').addEventListener('click',function(e) {
  e.preventDefault();
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});

// Video play and paused
  const videoCards = [...document.querySelectorAll('.video-card')];
  videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener('mouseleave', () => {
      let video = item.children[1];
      video.pause();
    });
  });
