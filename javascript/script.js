function myfun(value) {
    document.getElementById("input").value += value;
}

function result() {
    let x = document.getElementById("input").value;
    let y = eval(x);
    document.getElementById("input").value = y.toFixed(2);
}
function Clear() {
    document.getElementById('input').value = "";
}