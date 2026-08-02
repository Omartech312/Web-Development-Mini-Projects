// Constants targeting -, reset, + buttons
const reset = document.getElementById("reset");
const add = document.getElementById("plus");
const subtract = document.getElementById("minus");

//counter displayed ont he website
let count = 0;

// When the buttons are clicked the counter gets ++, -- or reset back to 0 and the id="count" in HTML gets update
reset.onclick = function(){
    count = 0;
    document.getElementById("count").textContent = count;
}

add.onclick = function(){
    count++;
    document.getElementById("count").textContent = count;
}

subtract.onclick = function(){
    count--;
    document.getElementById("count").textContent = count;
}