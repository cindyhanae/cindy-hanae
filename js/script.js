const bars = document.querySelector('.js-bars')
const menuMobile = document.querySelector('.js-menu-mobile')
const menuItem = document.querySelectorAll('.js-menu-mobile ul li a')
const contatoMenuMobile = document.querySelectorAll('.js-contato-menu a')
const body = document.querySelector('body')


function openMenu(){
    bars.classList.toggle('active')
    menuMobile.classList.toggle('active')

    if(menuMobile.classList.contains('active')){
        body.style.overflow = 'hidden'

    } else if(!menuMobile.classList.contains('active')){
        body.style.overflow = 'auto'
    }
}

bars.addEventListener('click', openMenu)
menuItem.forEach(function(item){
    item.addEventListener('click', (event) => {
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        const topSection = section.offsetTop

        event.preventDefault()
        bars.classList.remove('active')
        menuMobile.classList.remove('active')

        window.scrollTo({
            top: topSection - 40,
            behavior: 'smooth'
        })


        if(!menuMobile.classList.contains('active')){
            body.style.overflow = 'auto'
        }
    })
})
contatoMenuMobile.forEach(function(item){
    item.addEventListener('click', () => {
        menuMobile.classList.remove('active')
    })

    if(menuMobile.classList.contains('active') === false){
        document.body.classList.remove('preventScroll')
    }
})
