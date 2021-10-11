const sections = document.querySelector('#sectionsContainer');
const carousel = document.querySelector('#projectsCarousel')
const navbar = document.querySelector('nav');
const footer = document.querySelector('footer');
const carouselCells = document.querySelectorAll('.carousel-cell');
const projects = [
  {
    title: 'myCharitySearch',
    description: 'An app designed for those who are interested in donating to a charity. The user can find local charities near them, as well as global charities. Their most recently clicked charities are saved into the history section.',
    image: './assets/images/myCharitySearch.png',
    github: 'https://github.com/alonzofroman/charities-project',
    link: 'https://alonzofroman.github.io/charities-project/'
  },
  {
    title: 'omegleChatBot',
    description: 'A chat bot that spams a particular message to hundreds of people within minutes. More specifically, this bot takes the user\'s message, automatically sends it to a stranger on omegle.com, disconnects from that chat session, and starts all over again.',
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
    description: 'A timed 20 question JavaScript quiz, in which the user is rewarded with time upon correctly answering a question, and is docked time upon incorrectly answering a question. Upon completion, the user can locally save their highscores, along with their name.',
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
    if (sections.scrollTop >= 500)  {
      navbar.classList.add('fixed');
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
      navbar.classList.remove('fixed');
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



