let ourInput = document.querySelector("#our-input")
let ourList = document.querySelector("#our-list")
let ourForm = document.querySelector("#our-form")

function createItem(x) {
    ourHTML = `<li>${x} <button onclick="deleteIt(this)">delete</button></li>`
    ourList.insertAdjacentHTML("beforeend", ourHTML)
    ourInput.value = ""
    ourInput.focus()
}

ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createItem(ourInput.value)
}
)

function deleteIt(elementToDelete) {
    elementToDelete.parentElement.remove()
}