const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function myFunctionS() {
  document.getElementById("infoPnl").innerHTML = "A square face is often characterized by a strong jaw line, a broad forehead, and a wide chin and cheekbones. The width and length of the face are close to being equal. Frames should be selected to make the face look longer and to soften the square angles of the face. Choose frames that are slightly curved (like an oval shape) and that have more horizontal than vertical real estate."
  var image1 = document.createElement('img')
  image1.setAttribute("src","https://www.goggles4u.co.uk/media/catalog/product/cache/c443ca7343598bef75a42026c54e7ea8/1/1/119864w.jpg")
  image1.setAttribute("width", "100")
  image1.setAttribute("height", "100")
  var image2 = document.createElement('img')
  image2.setAttribute("src","https://www.goggles4u.com/media/catalog/product/cache/c443ca7343598bef75a42026c54e7ea8/1/3/135864w.jpg")
  image2.setAttribute("width", "100")
  image2.setAttribute("height", "100")
  var image3 = document.createElement('img')
  image3.setAttribute("src","https://i.pinimg.com/originals/3b/8a/c3/3b8ac3f5896b4412bfbaf2302a61aa08.jpg")
  image3.setAttribute("width", "100")
  image3.setAttribute("height", "100")

  document.getElementById("facePnl").append(image1)
  document.getElementById("facePnl").append(image2)
  document.getElementById("facePnl").append(image3)

}