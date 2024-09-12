'use strict';

// // let n = prompt('зп', 'salary');
// let user = {
//     name: 'Shurik',
//     'pets name': 'bobik',
//     // [n] : 50000

// };

// user.age = 50;
// user.name = 'Sasha';

// // console.log(user.salary);

// // console.log('name' in user);
// // // console.log(user);
// // // console.log(user.name);
// // // delete user.name;
// // // console.log(user);

// // console.log(user['pets name'])
// for(let key in user){
//     console.log(key);
// }
// for(let key in user){
//     console.log(user[key]);
// }

// // Копирование

// // let a = 7;
// // let b = a;

// // let user = {name: 'Bobik'}
// // let user2 = user;
// // user.age = 30;
// // console.log(user2)

// // let user = {name: 'Bobik'}
// // let user2 = {};

// // for(let key in user){
// //     user2[key] = user[key]
// // }
// // user.age = 20;
// // console.log(user2)

// // let user = {name: 'Bobik'}
// // let user2 = {};

// // Object.assign(user2, user)
// // let user3 = Object.assign({}, user)
// // user.age = 20;
// // console.log(user2)

// // Строки
// // let str = 'salam';
// // console.log('hi'.length)
// // console.log(str[0])
// // console.log(str.at(-2))

// // for(let letter of str){
// //     console.log(letter)
// // }

// // console.log(str.toUpperCase());
// // console.log(str[0].toLowerCase());

// // console.log(str.indexOf('ala'))
// // console.log(str.includes('sal'))

// // let str2 = str.slice(0, 2)
// // let str3 = str.substring(3, 2)
// // let str4 = str.substr(0, 1)
// // console.log(str2, str3)

// // массивы
// // let arr = [1,2,3, 'cat', {name: 'Bobik'}, function() {alert('hi')}];

// // // console.log(arr.at(-2))
// // arr[0] = 'kek'
// // console.log(arr.length)

// // push //добав в конец
// // shift //удаляет из начала
// // pop //удалить из конца
// // unshift //добав в начало

// // arr.push(1999)
// // console.log(arr)
// // arr.pop()
// // console.log(arr)
// // arr.unshift(1999)
// // console.log(arr)
// // arr.shift()
// // console.log(arr)

// for(let i =0; i<arr.length; i++){
//     console.log(arr[i])
// }
// for(let elem of arr){
//     console.log(elem)
// }

// let arr = ['apple', 'tomato', 'cola', 'juice'];
// // arr.splice(1, 1, 'watermelon', 'Bobik')
// // delete arr[1]
// let arr2 = arr.slice(0,2)
// let arr3 = arr.concat(arr2, [52, 352352], 'pid')
// console.log(arr3)

// ()=>{}
// arr.forEach((item, index, arr)=>{
//     alert(`У ${item} index: ${index}, в массиве: ${arr}`)
// })

// arr.forEach((item, index)=>{
//     alert(`У ${item} index: ${index}`)
// })

// console.log(arr.indexOf('hma'))
// console.log(arr.includes('cola'))


// let users = [
//     {id:1, name:'Bobik'},
//     {id:2, name:'Babik'},
//     {id:3, name:'Bobig'},
// ];

// let usersNew = users.filter(item => item.id > 1)
// // let user = users.find(item => item.id == 2)
// console.log(usersNew)

// let arr = ['apple', 'tomato', 'cola', 'juice'];
// let lengths = arr.map(item => item.length)
// console.log(alert(lengths)) 

// let nums = [1,2,52,8,9];
// // console.log(nums.sort((a,b) => a - b));
// // // console.log(nums.reverse());

// let names = 'Bobik, Barbarik, Barbosik';
// let arr = names.split(', ');
// console.log(arr);

// let str = arr.join(', ');
// console.log(str);

// let arr = [1, 2, 52, 8, 9]
// let result = arr.reduce((sum, item)=> sum + item, 0)
// console.log(result)

// зд1

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for( let key in salaries){
    sum += salaries[key];
}
alert(sum)

// зд2

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

// зд3

let calculator = {
    read() {
        this.a = +prompt('Первое число:', 0);
        this.b = +prompt('Второе число:', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// зд4

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));  

// зд5


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(user => user.name);

console.log(names); 

// зд6

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 8 };

let users1 = [vasya1, petya1, masha1];

function getAverageAge(users1) {
    let totalAge = users1.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users1.length;
}

console.log(getAverageAge(users1));