const copyText = document.getElementById("copyButton")
const adress = "http://127.0.0.1:5500/"
function copyToClipBoard() {

    navigator.clipboard.writeText(adress)
}
copyText.addEventListener("click", (e) => {
    copyToClipBoard()
})