const copyText = document.getElementById("copyButton")
const cat = document.getElementById("cat")
const catP = document.getElementById("pCat")
const video = document.getElementById("rickroll")
const div = document.getElementById("shareDiv")
let mouthOpen = false
const adress = "https://hsl-data.pages.dev"
function copyToClipBoard() {

    navigator.clipboard.writeText(adress)
}
copyText.addEventListener("click", (e) => {
    copyToClipBoard()
})
cat.addEventListener("click", (e) => {
    catPressed()
})
let clicksLeft = 5
function catPressed() {
    console.log("meow")
    clicksLeft--
    if (clicksLeft > 1) {
        catP.innerHTML = `Click Me ${clicksLeft} Times`
    }else{
        catP.innerHTML = `Just One More`

    }
    mouthOpen = true
    cat.src = "meow.png"
    setTimeout(catNormalize, 500)

    if (clicksLeft < 1) {
        console.log("super meow")
        catP.remove()
        cat.remove()
        video.play()
        video.style.display = "block"
        div.style.display = "block"

    }
}
function catNormalize() {
    cat.src = "cute_cat.png"
    mouthOpen = false
}
video.style.display = "none"
div.style.display = "none"

