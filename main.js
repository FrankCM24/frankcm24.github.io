/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu Show */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/* Hidden Menu */
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
      const navMenu = document.getElementById('nav-menu')
      //When clicked on each nav__link, the class show-menu is removed
      navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
  const header = document.getElementById('header')
  //Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  //When scroll passes 350 of viewport height add the button
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
