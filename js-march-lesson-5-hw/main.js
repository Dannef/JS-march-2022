//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [1,2,3,4];
// let aver = (arr) => {
//     let sum=0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum/arr.length;
// }
// console.log(aver(array))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
// let minMax = (...nr) => {
//     let min = nr[0]
//     let max = nr[0]
//     for (const nrElement of nr) {
//         if (nrElement<min) {
//             min = nrElement
//         }
//         if (nrElement>max){
//             max = nrElement
//         }
//     }
//     console.log(max);
//     return min
// }
// console.log(minMax(1,4,67,2,30,5,3,7))
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let random = () => {
//     let arr = []
//     for (let i = 0; i < 100; i++) {
//         arr[i] =  Math.round(Math.random()*100);
//     }
//     return arr
// }
// console.log(random())
// / - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
// let random = (limit) => {
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//         // arr.push(Math.round(Math.random() * 100));
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
// console.log(random(10));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1,2,3];
// let r = (array) => {
//     let newArr = []
//     for (let i = array.length -1; i >= 0 ; i--) {
//         newArr.push(array[i])
//
//     }
//     return newArr
// }
// console.log(r(arr))
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let arr = [
//     {
//         age : 22
//     },
//     {
//         age : 33
//     },
//
// ];
// // let change = (array) => {
// //     let back = array[0];
// //     array[0] = array [1];
// //     array [1] = back
// //     return array
// // }
// // console.log(change(arr))
// let change = (array) => [array[0],array[1]] = [array[1], array[0]];
// console.log(change(arr));
//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let retangle = (a,b) => a*b
// console.log(retangle(5,5))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let circle = (r) => 3.14 * Math.pow(r,2);
// console.log(circle(10))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let cilinder = (r,h) => 3.14 * h * r * 2;
// console.log(cilinder(10, 10));
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1,2,3,4]
// let fun = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// console.log(arr)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let txt = (text) =>
//     document.write(`<p>${text}</p>`)
//
// txt('hiii')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let txt = (text) =>{
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
// }
// txt ('bilibirda')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let liCreator=(text,b)=>{
//     document.write(`<ul>`)
//     for (let i=0; i<=b; i++){
//         document.write(`<li>${text}</li>`)
//     }
//         document.write(`</ul>`)
// }
// liCreator('dummy text', 7)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr= [1,'js', false, 4, 'hard']
// let dataOfArr=()=>{
//     document.write(`<ol>`)
//     for (let i=0; i<arr.length; i++){
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
// dataOfArr(arr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let arr=[{id:1, name:'Eugene', age:49}, {id:2, name: 'Maria', age: 19}]
// let dataOfArr=(data)=>{
//     for (let arrElement of arr) {
//         document.write(`<p>${arrElement.id}. ${arrElement.name} ${arrElement.age}</p>`)
//
//     }
// }
// dataOfArr(arr)
// - створити функцію яка повертає найменьше число з масиву
// let array = [10,8,3,4,5,6]
// let min = (arr) => {
//     let min = arr[0];
//     for (const minElement of arr) {
//         if (minElement < min) {
//             min = minElement;
//         }
//     }
//     return min;
// }
// console.log(min(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1,2,3];
// let sum = (arr) => {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
// console.log(sum(array));