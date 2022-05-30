// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// const {name, age} = document.forms.form ;
// const elementBtn = document.getElementById('btn');
// const key = 'key';
//
// const lclStg = (name, age) => {
//     const x = {
//       name,
//           age
//     }
//     localStorage.setItem(key, JSON.stringify(x))
// }
// elementBtn.onclick = () => {
//     lclStg(name.value, age.value)
// }
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
const {model, type, volume} = document.forms.car;
const btn = document.getElementById('btn');
const key = 'key';

const x = (model, type, volume) => {
  const parse = JSON.parse(localStorage.getItem(key)) || [];
  parse.push({model, type, volume})
    localStorage.setItem(key, JSON.stringify(parse))
}
btn.onclick = () => {
    x(model.value, type.value, volume.value)
}