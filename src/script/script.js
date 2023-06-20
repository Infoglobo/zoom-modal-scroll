
//Modal Container
const modal = document.getElementById('zoom-modal')

//Modam image component
const modalImg = document.getElementById('zoom-modal-img')

//Zoom in button
const zoomIn = document.getElementById('zoom-modal-zoom-in-button')

//Zoom out button
const zoomOut = document.getElementById('zoom-modal-zoom-out-button')

//Current zoom Level
let zoomLevel = 1

const minZoom = 1

const maxZoom = 10

//Get all images to zoom
const images = document.querySelectorAll('.imagem-click-zoom-modal')

var isOpen = false;

images.forEach(img => {

  img.onclick = () => {

    //Show modal
    modal.style.display = 'block'

    //Set source
    modalImg.src = img.src

    //Hidden overflow
    document.body.style.overflow = 'hidden'

    isOpen = true
  }
})

const closeModalZoom = function () {
  modal.style.display = 'none'
  document.body.style.overflow = 'auto'

  isOpen = false

  resetZoom()
}

document.querySelector('.zoom-modal-close-img').onclick = closeModalZoom;
document.querySelector('.zoom-modal').onclick = function (event) {
  if (event.target == modal) {
    closeModalZoom()
  }
}

zoomIn.onclick = function () {
  if (zoomLevel < maxZoom) {
    zoomLevel++
    modalImg.style.transform = `scale(${zoomLevel})`
  }
}

zoomOut.onclick = function () {
  if (zoomLevel > minZoom) {
    zoomLevel--
    modalImg.style.transform = `scale(${zoomLevel})`
  }
}

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape' && isOpen) {
    closeModalZoom()
  }
});

const resetZoom = () => {
  zoomLevel = minZoom
  modalImg.style.transform = `scale(${zoomLevel})`
}

let isDragging = false
let startX, startY, translateX, translateY

modalImg.addEventListener('mousedown', function (event) {

  if (event.button === 0) {
    isDragging = true
    startX = event.clientX
    startY = event.clientY
    translateX = parseFloat(getComputedStyle(this).getPropertyValue('transform').split(', ')[4]);
    translateY = parseFloat(getComputedStyle(this).getPropertyValue('transform').split(', ')[5]);
  }
})

modalImg.addEventListener('mousemove', function (event) {

  event.preventDefault()
  if (isDragging) {
    const dx = event.clientX - startX
    const dy = event.clientY - startY
    this.style.transform = `translate(${translateX + dx}px, ${translateY + dy}px) scale(${zoomLevel})`
  }
})

modalImg.addEventListener('mouseup', function (event) {
  if (event.button === 0) {
    isDragging = false;
  }
})

modalImg.addEventListener('touchstart', function (event) {

  isDragging = true
  startX = event.touches[0].clientX
  startY = event.touches[0].clientY
  translateX = parseFloat(getComputedStyle(this).getPropertyValue('transform').split(', ')[4]);
  translateY = parseFloat(getComputedStyle(this).getPropertyValue('transform').split(', ')[5]);

})

modalImg.addEventListener('touchmove', function (event) {
  event.preventDefault()
  if (isDragging) {
    const dx = event.touches[0].clientX - startX
    const dy = event.touches[0].clientY - startY

    this.style.transform = `translate(${translateX + dx}px, ${translateY + dy}px) scale(${zoomLevel})`
  }
})

modalImg.addEventListener('touchend', function (event) {
  isDragging = false;
})