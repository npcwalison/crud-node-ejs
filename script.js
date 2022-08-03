const open = document.querySelector('.open-popup')
const close = document.querySelector('.close-popup')
const popup = document.querySelector('.popup-container')


open.addEventListener("click", ()=> {
  popup.classList.add('active')
})

close.addEventListener("click", ()=> {
  popup.classList.remove('active')
})