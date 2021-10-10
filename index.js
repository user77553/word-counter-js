const textEl = document.getElementById("txtid")
const countEl = document.getElementById("count")
const charsCountEl = document.getElementById("chars-count")
const longestEl = document.getElementById("longest")

let arr = []

textEl.addEventListener("keyup", () => {
    arr = textEl.value.split(" ")
    countEl.textContent = arr.length - 1
    charsCountEl.textContent = textEl.value.length
    longestEl.textContent = findMax(arr)
})

function findMax (arr) {
    let max = ""
    for (let i=0; i<arr.length; i++){
        if (arr[i].length > max.length) max = arr[i]
    }
    return max
}
