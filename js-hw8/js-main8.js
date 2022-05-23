// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// let contentById = document.getElementById('content')
// console.log(contentById)

// -- отримує текст з блоку з id "rules"
// let txt = document.getElementById('rules')
// console.log(txt)
// -- замініть текст параграфа з id 'content' на будь-який інший
// let contentById = document.getElementById('content')
// contentById.innerText = 'here we are replacind existing text from content'
// // console.log(contentById)
// // -- замініть текст параграфа з id 'rules' на будь-який інший
// let rpl = document.getElementById('rules')
// rpl.innerText = 'same shit we are doing here'
// -- змініть кожному елементу колір фону на червоний
// let color = document.body.children
// for (const colorElement of color) {
//     colorElement.style.backgroundColor = 'silver'
// }
// -- змініть кожному елементу колір тексту на синій
// let txtColor = document.body.children
// for (const txtColorElement of txtColor) {
//     txtColorElement.style.color = 'blue'
// }
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let getId = document.getElementById('rules')
// console.log(getId.classList)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let clr = document.getElementsByClassName('fc_rules')
// for (const clrElement of clr) {
//     clrElement.style.color = 'red'
// }
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// let elementById = document.getElementById('main_header');
// elementById.className = 'name'
// b) робить шириниу елементу ul 400px
// let byTagName = document.getElementsByTagName('ul');
// for (const byTagNameElement of byTagName) {
//     byTagNameElement.style.width = '400px'
// }
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let elementsByClassName = document.getElementsByClassName('linkList');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.width = '50%'
// }
// d) отримує текст який зберігається в елементі з класом listElement2
// let elementById = document.getElementsByClassName('listElement2');
// for (const elementByIdElement of elementById) {
//     console.log(elementByIdElement.innerText)
// }
// e) отримує всі елементи li та змінює ім колір фону на сірий
// let elementsByTagName = document.getElementsByTagName('li');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.background = 'silver'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.className = 'anchor'
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     if (elementsByTagNameElement.innerText === 'link3') {
//         elementsByTagNameElement.style.fontSize = '40px';
//     }
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.classList.add(`element_${elementsByTagNameElement.innerText}`);
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let bgr = prompt('Enter color');
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.background = bgr
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let color = prompt('Enter Color');
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const elementsByClassNameElement of elementsByClassName) {
//     if (elementsByClassNameElement.innerText === 'content 2 segment') {
//         elementsByClassNameElement.style.color = color;
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let txt = prompt('enter text');
// let elementsByClassName = document.getElementsByClassName('content_1');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.innerText = txt;
// }
// l) отримати елементи p та змінити їм padding на 20px
// let elementsByTagName = document.getElementsByTagName('p');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.padding = '20px';
// }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let elementsByClassName = document.getElementsByClassName('text2');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.innerText = 'march-2022'
// }