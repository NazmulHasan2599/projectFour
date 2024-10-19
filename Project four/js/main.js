// ----- Show Menu -------

const navMenu = document.getElementById('nav__menu'),
      navToggle = document.getElementById('nav__toggle'),
      navClose = document.getElementById('nav__close');

navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show__menu');
})
navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show__menu');
})

// ---------Remove Mobile Menu -----------
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(nl =>{
    nl.addEventListener('click', ()=>{
        navMenu.classList.remove('show__menu');
    })
})


// ---------Header Background Change -----------
const shadowHeader = document.getElementById('header');

window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY

    if(scroll > 50){
        header.classList.add('shadow-header')
    }else{
        header.classList.remove('shadow-header')
    }
})

// ---------Email Js -----------
const contactForm = document.getElementById('contact__form'),
      contactMessage = document.getElementById('contact__message');

// const sendEmail = (e) =>{
//     e.preventDefault()

//     // serviceID - templateID - #form - publicKey

//     emailjs.sendForm('service_i1hkue7', 'template_m0vvn4l', '#contact__form', 'C_wxOGbyXJgVpYVPy')
//     .then(() =>{
//         // Show sent message
//         contactMessage.textContent = `Message sent successfully ✅`

//           // Remove message after five seconds
//         setTimeout(()=>{
//             contactMessage.textContent = ''
//         }, 5000)

//         contactForm.reset()
//     }, ()=>{
//         contactMessage.textContent = `Message not sent (service error) ❌`
//     })

// }

contactForm.addEventListener('submit', sendEmail())

function sendEmail (){
    let parms = {
        user_name : document.getElementById('name').value ,
        user_email : document.getElementById('email').value ,
        user_subject : document.getElementById('subject').value ,
        user_message : document.getElementById('message').value,
    }

    emailjs.send('service_i1hkue7', 'template_1f3y0bk', parms)
    // .then(alert("Message sent successfully ✅"))
    .then(() =>{
        // Show sent message
        contactMessage.textContent = `Message sent successfully ✅`

          // Remove message after five seconds
        setTimeout(()=>{
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, ()=>{
        contactMessage.textContent = `Message not sent (service error) ❌`
    })
}

contactForm.addEventListener('submit', sendEmail)

// --------- Show scroll up -----------

// const scroll = ()=>{
//     const scrollUp = document.getElementById('srcoll-up');

//     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
//                         : scrollUp.classList.remove('show-scroll')
// }

// window.addEventListener('scroll', scroll())

 window.addEventListener('scroll', ()=>{
    const scrollUp = document.getElementById('srcoll-up')
    let scroll = window.scrollY

    if(scroll >= 350){
        scrollUp.classList.add('show-scroll')
    }else
    scrollUp.classList.remove('show-scroll')
    })

// --------- Scroll section active link -----------
const section = document.querySelectorAll('section')

// const scrollActive = ()=>{
//     let scrollDown = window.scrollY

//     section.forEach(sec =>{
//        let sectionHeight = sec.offsetHeight
//        let sectionTop = sec.offsetTop - 58
//        let sectionId = sec.getAttribute('id')
//        let sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

//        if(scrollDown >= sectionTop && scrollDown <= sectionTop + sectionHeight){
//         sectionClass.classList.add('active__link')
//        }else{
//         sectionClass.classList.remove('active__link')
//        }
//     })

// }

// window.addEventListener('scroll', scrollActive)

window.addEventListener('scroll', ()=>{
    let scrollDown = window.scrollY

    section.forEach(sec =>{
        let secHeight = sec.offsetHeight
        let secTop = sec.offsetTop - 58
        let secId = sec.getAttribute('id')
        let secClass = document.querySelector('.nav__menu a[href*=' + secId +']')

        if(scrollDown >= secTop && scrollDown <= secTop + secHeight){
            secClass.classList.add('active__link')
        }else{
            secClass.classList.remove('active__link')
        }
    })
})

// --------- Dark Light theme -----------
const themeButton = document.getElementById('theme__button'),
      darkTheme = 'dark-theme',
      iconTheme = 'ri-sun-line';

// previously selected items (if user select)

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// themeButton.addEventListener('click', ()=>{
//     document.body.classList.toggle(darkTheme)
// })

// ---------- Scroll Reveal -----------

let sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true  // animation Repeat
  })

  sr.reveal(`.home__perfil, .about__image`, {origin: 'right'})
  sr.reveal(`.home__name, .home__info, .about__info`, {origin: 'left'})
  sr.reveal(`.services__card, .projects__card`, {interval: '100'})
  sr.reveal(`.contact__data`, {origin: 'left'})
  sr.reveal(`.contact__mail`, {origin: 'right'})
  sr.reveal(`.contact__social`, {interval: '100'})
  sr.reveal(`.footer__list`, {origin: 'right'})
  sr.reveal(`.footer__copy`, {origin: 'left'})


