const burger = document.querySelector('.burger')
const navWrapper = document.querySelector('.nav-ul')
const openModal = document.querySelector('.lets-work-together')
const closeModal = document.querySelector('.modal-button-close')
const modalWrapper = document.querySelector('.modal-wrapper')





burger.addEventListener('click', function(event){
    navWrapper.classList.toggle('nav-ul-active')
    burger.classList.toggle('active')
})
openModal.addEventListener('click', () => {
    modalWrapper.classList.add('show')
}
)
closeModal.addEventListener('click', () => {
    modalWrapper.classList.remove('show')
}
)
