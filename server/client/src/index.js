const hamburgerMenu = document.querySelector('.hamburger-menu-links-container')

const hamburgerMenuBtn = document.querySelector(".navigation-hamburger-menu-container")
const hamburgerMenuExitBtn = document.querySelector(".hamburger-menu-exit-button-container")

const navigationLinks = document.querySelectorAll('.hamburger-links')

hamburgerMenuBtn.addEventListener("click", () => {
    if(hamburgerMenu.classList.contains('slide-out')) {
        hamburgerMenu.classList.remove('slide-out')
    }

    hamburgerMenu.classList.add('slide-in')
})

hamburgerMenuExitBtn.addEventListener("click", () => {
    if(!hamburgerMenu.classList.contains('slide-out')) {
        hamburgerMenu.classList.add('slide-out')
    }

    setTimeout(() => {
        hamburgerMenu.classList.remove('slide-in')
    }, 410)

})

navigationLinks.forEach(element => {
    element.addEventListener('click', () => {
        if(element.classList.contains('hamburger-introduction-link')) {
            if(hamburgerMenu.classList.contains('slide-in')) {
                hamburgerMenu.classList.remove('slide-in')
            }
        
            hamburgerMenu.classList.add('slide-out')

            console.log('Intro')
        } else if(element.classList.contains('hamburger-portfolio-link')) {
            if(hamburgerMenu.classList.contains('slide-in')) {
                hamburgerMenu.classList.remove('slide-in')
            }
        
            hamburgerMenu.classList.add('slide-out')

            console.log('portfolio')
        } else if(element.classList.contains('hamburger-about-link')) {
            if(hamburgerMenu.classList.contains('slide-in')) {
                hamburgerMenu.classList.remove('slide-in')
            }
        
            hamburgerMenu.classList.add('slide-out')

            console.log('about')
        } else if(element.classList.contains('hamburger-skills-link')) {
            if(hamburgerMenu.classList.contains('slide-in')) {
                hamburgerMenu.classList.remove('slide-in')
            }
        
            hamburgerMenu.classList.add('slide-out')

            console.log('skills')
        } else {
            if(hamburgerMenu.classList.contains('slide-in')) {
                hamburgerMenu.classList.remove('slide-in')
            }
        
            hamburgerMenu.classList.add('slide-out')

            console.log('contact')
        }
    })

    // console.log(element.classList)
});

// console.log(navigationLinks)
