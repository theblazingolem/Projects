let countEl = document.getElementById("count-el")
let saveEl = document.getElementById('save-el')

let count = 0
    let saveFile="Previous Entries:"

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.innerHTML = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    saveFile+=count
    saveFile+=', '
    saveEl.innerHTML=saveFile
    count = 0
    countEl.innerHTML = count
}
