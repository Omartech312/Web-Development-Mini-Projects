const reset = document.getElementById("reset");
const add = document.getElementById("plus");
const subtract = document.getElementById("minus");

let count = 0;

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