const copyText = document.getElementById("copyButton")
const adress = "https://hsl-data.pages.dev"
function copyToClipBoard() {

    navigator.clipboard.writeText(adress)
}
copyText.addEventListener("click", (e) => {
    copyToClipBoard()
})