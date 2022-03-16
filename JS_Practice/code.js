// let num = ['One','Two', 'Three', 'Four'];

// const callBackFunc = (num, index) => {
//     console.log(index+': '+num);
// };

// num.forEach(callBackFunc);

// const callBackFunc = (value) => value;

// function test(callBackFunc){
//     let value = 10;
//     console.log(callBackFunc(value));
// }

// test(callBackFunc);

// let objLit = {
//     A : 'hello'
// };

// console.log(objLit);

// let num = ['One','Two', 'Three', 'Four'];
// num.forEach(n => {
//     console.log(n);
// });

// const paras = document.querySelectorAll('p');
// //console.log(paras);

// paras.forEach((para, index) => {
//     if(para.innerText.includes('error')){
//         para.classList.add('error');
//     }
//     else if(para.innerText.includes('success')){
//         para.classList.add('success');
//     }
// });

//innerText does not show hidden text so use textContent instead

// const lis = document.querySelectorAll('li');
// // console.log(lis);

// lis.forEach(li => {
//     li.addEventListener('click', (e)=>{
//         console.log('LI');
//         e.stopPropagation();
//     });
// });

// lis.forEach(li => {
//     li.firstChild.addEventListener('click', function(){
//         console.log(this.innerText = 'Hey');
//     });
// });

// //Arrow function referes this keyword to the main (window) object
// // to use current object use regular function


// const ul = document.querySelector('ul');
// ul.addEventListener('click', e => {
    
//     if(e.target.parentElement.tagName === 'LI'){
//         e.target.parentElement.remove();
//     }

//     e.stopPropagation();

// });

// const form = document.querySelector('form');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(form.username.value);
// });

// const regex = /^[a-zA-Z0-9]{1,100}$/;

// if(regex.test('abcAbc123')){
//     console.log('valid string');
// }else{
//     console.log('invalid string');   
// }

// const a = 1;
// const b = 9;

// console.log(a || b);

// const a = 99;
// const b = 9;

// console.log(a && b);


// function LocationProto (location) {
//     this.location = location;
// }

// LocationProto.prototype.getLocation = function () {
//     return `Location: ${this.location}`;
// }


// function User (name, location) {
//     LocationProto.call(this, location);
//     this.name = name;
// }


// User.prototype = Object.create(LocationProto.prototype);

// const userObj = new User('Saleh', 'Dhaka');

// console.log(userObj);


// const testObj = {
//     name: 'Saleh',
//     phone: {
//         gp: '0170',
//         tt: '0152'
//     }
// };

// const flatOut = {...testObj.phone};
// console.log(flatOut);

// const arr = [1,2,3];
// const arrSpreaded = [...arr, 4, 5, 6];
// console.log(arrSpreaded);

// const testObjArr = [
//     { name: 'A', loctaion: 'DHA' },
//     { name: 'A', loctaion: 'MYN' }, 
//     { name: 'A', loctaion: 'DHA' }, //
//     { name: 'B', loctaion: 'CTG' }, 
//     { name: 'C', loctaion: 'RAJ' },
//     { name: 'D', loctaion: 'CTG' },
//     { name: 'B', loctaion: 'CTG' } //
// ];

// console.log('OBJ array size:', testObjArr.length);
// console.log('OBJ array values:', testObjArr);

// const mappedToString = testObjArr.map( obj => JSON.stringify(obj));
// const testSets = new Set(mappedToString);
// //set to array spreading
// const uniqueObjArr = [...testSets].map( obj => JSON.parse(obj));
// //Or this -> const uniqueObjArr = Array.from(testSets).map( obj => JSON.parse(obj));

// console.log('Unique OBJ array size:', uniqueObjArr.length);
// console.log('Unique OBJ array values:', uniqueObjArr);
