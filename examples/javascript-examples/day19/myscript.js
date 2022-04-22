function test() {
   let fruits = ['apple', 'grapes', 'orange', 'mango'];
   let ele = document.getElementById('main');
   let content = '<ul>';
   // for loop can be used to iterate array
   for(let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]); // index = 4, 4 < 4, fruits[3], index++
    content = content +  "<li>"+fruits[index]+"</li>";
   } 
   ele.innerHTML = content+'</ul>';
   let a = 0;
   while(a < 0) {
    console.log("a = "+a+" < 5");
    a++;
   }
   let b = 0;
   do {
    console.log('b = '+b+' < 0');
    b++;
   } while(b < 0);

}

