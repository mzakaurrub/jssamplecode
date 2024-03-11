let elem = document.getElementById("count-el");
let counter = 0;

function increment() {
    let value = ++counter;
    elem.innerText = value;
}
