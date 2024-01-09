// initialize the count as 0
// listen for clicks on the increment button is clicked9
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
    count +=1;
    countEl.innerText = count;
}

function save(){
    saveEl.textContent += count + ' - ';
    countEl.textContent = 0;
    count = 0;
}

