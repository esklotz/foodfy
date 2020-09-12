const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const imgId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `assets/${imgId}`
        const h1Content = card.querySelector('h1').innerHTML
        const pContent = card.querySelector('p').innerHTML
        modalOverlay.querySelector('h1').innerHTML = h1Content
        modalOverlay.querySelector('p').innerHTML = pContent  
        saveClick(imgId)
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})



