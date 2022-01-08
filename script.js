'user strict'

//-------------------------Task 1------------------
let count = 0;
let text = prompt ('Write some text');
for (let i=0; i < text.length; i++) {
   if (text.charAt(i) == ' '){
      count ++;
   }
}
console.log(count);
//-------------------------Task 2-------------------
let text1 = prompt ('Ведіть Email');
let res = text1.indexOf('@');
switch (res) {
    case 0: 
    case -1:
    case text1.length-1:
        console.log ('Не правильно введено')
        break;
    default:
        console.log('Правильно');
        break;
}
//----------------------Task 3-----------------------
let text2 = prompt ('Write some text');
let count = 0;
let start = 0;
while (true) {
    let position = text2.indexOf('html', start);
    if (position == -1) break;
    start = position + 1;
    count ++;
}
console.log(count);
//----------------------Task 4-----------------------
let address = prompt ('Enter URL- address');
let address1 = address.split('//'); 
console.log(address1 [1]);