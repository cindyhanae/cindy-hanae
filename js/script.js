const bars = document.querySelector('.js-bars')
const menuMobile = document.querySelector('.js-menu-mobile')
const menuItem = document.querySelectorAll('.js-menu-mobile ul li a')
const contatoMenuMobile = document.querySelectorAll('.js-contato-menu a')

contatoMenuMobile.forEach(function(item){
    item.addEventListener('click', () => {
        menuMobile.classList.remove('active')
    })
})


menuItem.forEach(function(item){
    item.addEventListener('click', () => {
        menuMobile.classList.remove('active')
    })
})

function openMenu(){
    bars.classList.toggle('active')
    menuMobile.classList.toggle('active')
}

bars.addEventListener('click', openMenu)
