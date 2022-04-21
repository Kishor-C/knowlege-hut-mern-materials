var ele = document.getElementById('main');
console.log(ele);
console.log('------------------');
// innerHTML is a property of an Element that accesses content inside the element
console.log(ele.innerHTML);
ele.innerHTML = '<h3>Hello Javascript</h3>'; // this changes content of div: main
ele.style.color = 'red'; // <div id = 'main' style = 'color:red'>
ele.style.fontSize = '30px';

var eleStyle = ele.style;
eleStyle.color = 'green'; // ele.style.color = 'green';
eleStyle.fontSize = '12px';
eleStyle.backgroundColor = 'yellow';