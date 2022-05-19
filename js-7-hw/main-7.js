// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let arr = [
//     new User(1, 'Vitalii', 'Mykolenko', 'Everton', 7696545346),
//     new User(2, 'Andrii', 'Yarmolenko', 'West Ham', 2354545),
//     new User(3, 'Oleksandr', 'Zinchenko', 'Man City', 67978),
//     new User(4, 'Evhenii', 'Konoplyanka', 'Cracovia', 45768),
//     new User(5, 'Serhio', 'Ramos', 'PSG', 45756867),
//     new User(6, 'Cristiano', 'Ronaldo', 'Man United', 9785453),
//     new User(7, 'Marcus', 'Rashford', 'Man United', 58576),
//     new User(8, 'Marco', 'Reus', 'Borussia', 3456),
//     new User(9, 'Toni', 'Kroos', 'RMA', 1423),
//     new User(10, 'David', 'DeXea', 'Man United', 124234)
// ]
// console.log(arr)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = arr.filter (value => value.id % 2 === 0);
// console.log(filter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = arr.sort((a,b) => a.phone - b.phone);
// console.log(sort)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

 let clientArr = [
    new Client(5, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','milk']),
    new Client(6, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','milk']),
    new Client(1, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','milk']),
    new Client(2, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','milk']),
    new Client(4, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','milk']),
    new Client(3, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','juice','milk']),
    new Client(7, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread']),
    new Client(8, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','meat']),
    new Client(10, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread','apple','lime','tomato']),
    new Client(9, 'Vasya', 'Pupkin', 'qq@gmail.com', '1234556778',['bread']),
]
// console.log(clientArr)
// let sort = clientArr.sort((a,b) => a.order.length - b.order.length);
// console.log(sort)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, manufactorer, year, maxspeed, engine) {
//     this.model = model,
//         this.manufactorer = manufactorer,
//         this.year = year,
//         this.maxspeed = maxspeed,
//         this.engine = engine,
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//         }
//         this.info = function () {
//             for (const carElement in this) {
//                 console.log(this)
//             }
//         }
//         this.increaseMaxSpeed = function (speed){
//         this.maxspeed += speed
//         }
//         this.chamgeYear = function (newYear){
//         this.year = newYear
//         }
//         this.addDriver = function (driver){
//         this.Driver = driver
//         }
// }
// let newCar = new Car('bmw', 'munich', '2021', 250 , '335d')
// newCar.drive();
// newCar.info()
// newCar.increaseMaxSpeed(15)
// newCar.chamgeYear(2022)
// newCar.addDriver('Dan')

// - (Те саме, тільки через клас)
// class  Car{
//     constructor(model, manufactorer, year, maxspeed, engine) {
//     this.model = model,
//         this.manufactorer = manufactorer,
//         this.year = year,
//         this.maxspeed = maxspeed,
//         this.engine = engine
//     }
//
//         drive () {
//             console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//         }
//     info  () {
//         for (const carElement in this) {
//             console.log(this)
//         }
//     }
//     increaseMaxSpeed  (speed){
//         this.maxspeed += speed
//     }
//     chamgeYear  (newYear){
//         this.year = newYear
//     }
//     addDriver (driver){
//         this.Driver = driver
//     }
// }
// let newCar = new Car('bmw', 'munich', '2021', 250 , '335d')
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(15);
// newCar.chamgeYear(2022);
// newCar.addDriver('Dan');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Cinderella (name, age, footsize){
    this.name = name;
    this.age = age;
    this.footsize = footsize
}
let arrCinderella = [
    new Cinderella('Natasha',22,36),
    new Cinderella('Marina',23,37),
    new Cinderella('Sveta',34,45),
    new Cinderella('Vika',22,36),
    new Cinderella('Zhenia',23,37),
    new Cinderella('Nastia',53,39),
    new Cinderella('Sasha',22,37),
    new Cinderella('Olya',23,37),
    new Cinderella('Karina',16,42),
    new Cinderella('Roksi',22,36)
];
function Prince (name, age, match){
    this.name = name;
    this.age = age;
    this.match = match
}
let newPrince = new Prince('Igor', 30, 39);

let perfectMatch = (cind, prince) => {
    for (const arrCinderellaElement of cind) {
        if (arrCinderellaElement.footsize === prince.match) {
            return `${arrCinderellaElement.name}`
        }
    }
}
console.log(perfectMatch(arrCinderella, newPrince));
let bye = arrCinderella.find(value => value.footsize === newPrince.match)
console.log(bye)
