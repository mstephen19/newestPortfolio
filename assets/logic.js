const sections = document.querySelector('#sectionsContainer');
const navbar = document.querySelector('nav');
const footer = document.querySelector('footer');

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