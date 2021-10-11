const sections = document.querySelector('#sectionsContainer');
const carousel = document.querySelector('#projectsCarousel')
const navbar = document.querySelector('nav');
const footer = document.querySelector('footer');
const carouselCells = document.querySelectorAll('.carousel-cell');
const burgerMenu = document.querySelector('#mobileBurger');
const mobileNav = document.querySelector('#mobileNav')
const phoneBtn = document.querySelector('.phoneNumButton')
const projects = [
  {
    title: 'myCharitySearch',
    description: 'An app designed for those interested in donating to a charity. Users can find local charities, as well as global charities. Their most recently clicked results are saved to the history section.',
    image: './assets/images/myCharitySearch.png',
    github: 'https://github.com/alonzofroman/charities-project',
    link: 'https://alonzofroman.github.io/charities-project/'
  },
  {
    title: 'omegleChatBot',
    description: 'Chat bot that spams a message to hundreds of people within minutes. The bot takes the user\'s message, automatically sends it to a stranger on omegle.com, disconnects from the chat, and starts all over again.',
    image: './assets/images/omegleChatBot.png',
    github: 'https://github.com/mstephen19/omegle-Chat-Bot'
  },
  {
    title: 'useful.js JavaScript Library',
    description: 'A JavaScript library that makes certain common tasks much easier to achieve.',
    image: './assets/images/usefulJS.png',
    github: 'https://github.com/mstephen19/usefulJS-library'
  },
  {
    title: 'Secure Password Generator',
    description: 'Generate a random secure password based on specific parameters that you provide.',
    image: './assets/images/pwGen.png',
    github: 'https://github.com/mstephen19/BCBPWGEN',
    link: 'https://mstephen19.github.io/BCBPWGEN/'
  },
  {
    title: 'CodeQuiz',
    description: 'A timed 20 question JavaScript quiz, in which the user is rewarded with time upon correctly answering, and docked time upon incorrectly answering. The user can locally save their highscores, along with their name.',
    image: './assets/images/codeQuiz.png',
    github: 'https://github.com/mstephen19/codeQuiz',
    link: 'https://mstephen19.github.io/codeQuiz/'
  },
  {
    title: 'Palette Creator',
    description: 'Create a color pallete for your website by randomly generating colors! Save your work with the "Save" button in the top right corner. Super mobile friendly.',
    image: './assets/images/palleteCreator.png',
    github: 'https://github.com/mstephen19/PaletteCreator',
    link: 'https://mstephen19.github.io/PaletteCreator/'
  }
];

sections.addEventListener('scroll', ()=>{
  //cl(sections.scrollTop);
    if (sections.scrollTop >= 250)  {
      navbar.classList.add('fixed');
      navbar.classList.add('hidden');
      burgerMenu.classList.add('hideBurger');
    } else {
      navbar.classList.remove('hidden');
      navbar.classList.remove('fixed');
      burgerMenu.classList.remove('hideBurger');
      el(footer).hide()
    }
    if (sections.scrollTop >= 2100) {
      el(footer).showFlex()
    } else {
      el(footer).hide()
    }
})

function insertToCarousel(){
  _(projects).forEach((i)=>{
    el(carouselCells[i].children[0]).setAttributes({'src': projects[i].image})
    el(carouselCells[i].children[1].children[0]).text(projects[i].title)
    el(carouselCells[i].children[1].children[1]).text(projects[i].description)
    el(carouselCells[i].children[1].children[2].children[0]).setAttributes({'href': projects[i].github, 'target': '_blank'})
    if (projects[i].link){
      el(carouselCells[i].children[1].children[2].children[1]).setAttributes({'href': projects[i].link, 'target': '_blank'})
    }
  })
}

function createFlickity(){
  const flkty = new Flickity(carousel, {
    wrapAround: false,
    cellAlign: 'left',
    contain: true,
    imagesLoaded: true,
    percentPosition: false,
  });
  // Credit: https://flickity.metafizzy.co/options.html
  var imgs = carousel.querySelectorAll('.carousel-cell img');
  var docStyle = document.documentElement.style;
  var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
  flkty.on('scroll', ()=> {
    flkty.slides.forEach((slide, i)=> {
      var img = imgs[i];
      var x = (slide.target + flkty.x) * -1/3;
      img.style[transformProp] = 'translateX(' + x  + 'px)';
    });
  });
};

insertToCarousel();
createFlickity();

function showMobileNav(){
  mobileNav.classList.toggle('slideDown');
  burgerMenu.classList.toggle('rotate')
  mobileNav.addEventListener('click', ()=>{
    mobileNav.classList.toggle('slideDown');
    burgerMenu.classList.toggle('rotate')
  })
}

burgerMenu.addEventListener('click', showMobileNav);

// cl(document.querySelector('#phoneSection').children[1])

function pastePhoneNumber(){
  const number = _(document.querySelector('#phoneSection').children[1].getAttribute('data-ph')).reverseString();
  el(this).hide()
  el(document.querySelector('#phoneSection').children[1]).text(number);
}

phoneBtn.addEventListener('click', pastePhoneNumber)