var a = prompt("Enter value of a: ");
var b = prompt("Enter value of b: ");
a = parseInt(a);
b = parseInt(b);
var c = a + b;
var ele = document.getElementById('main');
if (a > b) {
    ele.innerHTML = 'a is > b and value of c = '+c;
    ele.style.color = 'green';
} else {
    ele.innerHTML = 'a is not > b and value of c = '+c;
    ele.style.color = 'red';
}