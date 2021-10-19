const bars = document.querySelector('.js-bars')
const menuMobile = document.querySelector('.js-menu-mobile')
const menuItem = document.querySelectorAll('.js-menu-mobile ul li a')
const contatoMenuMobile = document.querySelectorAll('.js-contato-menu a')
const body = document.querySelector('body')


contatoMenuMobile.forEach(function(item){
    item.addEventListener('click', () => {
        menuMobile.classList.remove('active')
    })

    if(menuMobile.classList.contains('active') === false){
        document.body.classList.remove('preventScroll')
    }
})


menuItem.forEach(function(item){
    item.addEventListener('click', () => {
        bars.classList.remove('active')
        menuMobile.classList.remove('active')

        if(!menuMobile.classList.contains('active')){
            body.style.overflow = 'auto'
        }
    })
})

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
