// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".
// const div = document.createElement('div');
// div.setAttribute('id', 'hello')
// div.innerText = 'hello you';
//
// const btn = document.createElement('button');
// btn.innerText = 'click me'
//
// document.body.append(div, btn);
//
// btn.onclick = function () {
//     div.style.display = 'none'
// }
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const inputElement = document.createElement('input');
// inputElement.type = 'number';
//
// const buttonElement = document.createElement('button');
// buttonElement.innerText = 'click me';
//
// document.body.append(inputElement, buttonElement)
//
// buttonElement.addEventListener('click', function (){
//     if (inputElement.value >= 18) {
//         alert('correct ')
//     }
//     else {
//         alert('try again')
//     }
//     inputElement.value = '';
// })
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const button = document.getElementById('but');
// button.addEventListener('click', function () {
//     console.log(document.forms.formFirst.inputOne.value);
//     console.log(document.forms.formFirst.inputTwo.value);
//     console.log(document.forms.formSecond.inputThree.value);
//     console.log(document.forms.formSecond.inputFour.value);
// })
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const inputOne = document.createElement('input');
const inputTwo = document.createElement('input');
const inputThree = document.createElement('input');
const button = document.createElement('button');

button.innerText = "Click";
document.body.append(inputOne, inputTwo, inputThree, button);

button.addEventListener('click', function () {

    const tr = inputOne.value
    const td = inputTwo.value
    const inputText = inputThree.value

    function creatorTable (tr, td, text) {
        const table = document.createElement('table');
        document.body.append(table)

        for (let i = 0; i < tr; i++) {
            const tr = document.createElement('tr');
            table.appendChild(tr)

            for (let j = 0; j < td; j++) {
                const td = document.createElement('td');
                td.innerText = `${text}`;
                td.style.border = '1px solid blue'
                td.style.color = 'red'
                tr.appendChild(td);
            }
        }
    }
    creatorTable(tr, td, inputText);
})


