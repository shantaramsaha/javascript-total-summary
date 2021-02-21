// object to JSON convert

// const person = {
//     name:'Abdul',
//     age: 25,
//     district: 'dhaka',
//     salary: 3999048
// };
// console.log(JSON.stringify(person))


// JSON convert back and forth

// const person = {
//     name:'Abdul',
//     age: 25,
//     job: 'programing-hero'
// };
// const data =(JSON.stringify(person))
// const dataParsed = JSON.parse(data);
// console.log( dataParsed.job);


// api Fatch

// fetch('url')
// .then(res => res.json())
// .then(data=>console.log(data));



// local storage

//  localStorage.setItem('userId',1234)

// const userId = localStorage.getItem('userId');
// console.log(userId);

// localStorage.setItem('person', JSON.stringify(person));
// const storedPerson = localStorage.getItem('person');
// const parsedPerson =JSON.parse(storedPerson);
// console.log (parsedPerson.age);

// const keys = Object.keys(parsedPerson);
// console.log(keys);

// const values = Object.values(parsedPerson);
// console.log(values);





// DESTRUCTURING-AND-DOTS






// array destructuring

// first

// const numbers=[44,73];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x,y);

//  second

// const numbers = [54,76];
// const [x,y] =[54,76];
// console.log(x,y);

// third

// const numbers = [65,54,76,53,68];
// const [x,y] =numbers;
// console.log(x,y);

// fourth

// const numbers = [65,54,76,53,68];
// function boxify(num1){
//     return [num1, num1 +9, num1 +4 ];
// }
// const boxed = boxify(7);
// console.log(boxed);

// five

// const numbers = [65,54,76,53,68];
// function boxify(num1){
//     return [num1, num1 +9, num1 +4 ];
// }
// const [shanta1, shanta2,shanta3] = boxify(7);
// console.log(shanta1, shanta2, shanta3);



// object destructuring1

// const {name,age,job,id,money,wife,} = {id:4, money: 57, wife: 'rani', name:'tomal', age:13, job:'privet'};

// console.log(name, job, age, id, money, wife );
// console.log(name, job, age, id, wife);
// console.log(name, job, age, money);

// object destructuring2
// const person = {id:4, money: 57, wife: 'rani',name:'tomal',age:13,job:'privet'};
// const {money}=person;

// console.log(money);


// create object shortcut1

// const x = 24;
// const y = 35;
// const obj = {x:x, y:y};
// console.log(obj)


// create object shortcut2

// const x = 24;
// const y = 35;
// const obj2 ={x,y};
// console.log(obj2)


// new array using three dot1

// const numbers = [65,54,76,53,68];
// numbers.push(56);
// console.log(numbers);

// new array using three dot2

// const newNumbers=[...numbers, 56];
// const numbers = [65,54,76,53,68];
// console.log(newNumbers);





// SHORTCURTS




// new array using three dot1//
// first-way


// const money = 150 ;
// let food;
// if (money >100){
//     food='biryani';
// }
// else{
//     food='patato chips';
// }
// console.log(food);


//second shortcut-way|| condition ? true value : false value

// const money = 150 ;
// let food2 =money >100?'biryani':'alur vorta';
// console.log(food);


// alternet

// const active =false ;
// let cssClass;
// if (active === true){
//     cssClass = 'active'
// }
// else{
//     cssClass = 'inactive'
// }
// console.log(active);


// alternet

// const active = false;
// const cssClass2 = active ? 'active':'inactive';
// console.log(active);


// alternet

// const active = true;
// active ? displayUser() : hiddenUser();
// console.log(active);


// alternet

// const active = false;
// const x =active && 5;
// const y = active || 6;
// console.log(y);


// string to number converrrt

// const number = + '45';
// console.log(number);


// number to string converrrt

// const numString = 45 + '';
// console.log(numString);


// function add(element1 , element2 =7){
//     return element1 + element2;
// }
// const result = add(48, 43);
// console.log(result);


// function add(element1 , element2){
//     element2=element2 || 5;
//     return element1 + element2;
// }
//  const result =add(45, 43);
// console.log(result);



// CORE-CONCEPTS


// array related things

// const numbers =[2, 4, 5, 6, 7, 8,];
// const friends = ['rafiq', 'jabbar', 'barkat'];
// const products= [
//     {id:1, name: 'laptop', price: 50},
//     {id:3, name: 'mobile', price:400},
//     {id:5, name: 'watch', price: 30},
//     {id:4, name: 'mouse',price: 100},
//     {id:6, name: 'earPhone',price: 150}
// ];
// const names = products.map(product=>product.name);
// console.log(names);

//map


// const numbers =[2, 4, 5, 6, 7, 8,];
// const friends = ['rafiq', 'jabbar', 'barkat'];
// const products= [
//     {id:1, name: 'laptop', price: 50},
//     {id:3, name: 'mobile', price:400},
//     {id:5, name: 'watch', price: 30},
//     {id:4, name: 'mouse',price: 100},
//     {id:6, name: 'earPhone',price: 150}
// ];
// const prices = products.map(pd=>pd.price);
// console.log(prices);


// const numbers =[2, 4, 5, 6, 7, 8,];
// console.log(numbers);
// const friends = ['rafiq', 'jabbar', 'barkat'];
// console.log(friends);

// const products= [
//     {id:1, name: 'laptop', price: 50},
//     {id:3, name: 'mobile', price:400},
//     {id:5, name: 'watch', price: 30},
//     {id:4, name: 'mouse',price: 100},
//     {id:6, name: 'earPhone',price: 150}
// ];
// console.log(products);


// const prices2 = products.map(pd=>{
//     // do some work
//    return pd.price;
// })
// console.log(prices2);




//forEach
// products.forEach(product =>console.log(product.name));



// filter


// const cheaper = products.filter(pd => pd.price < 100);
// console.log(cheaper);


// const valuable = products.filter(pd => pd.price > 100);
// console.log(valuable);


// remove an id using filter


// const remaining = products.filter(pd => pd.id !=3);
// console.log(remaining);


// find out item

// const hasWatch = products.find(pd=> pd.name === 'watch');
// console.log(hasWatch);

// reduce

// includes

// push

//pop

// length

// indexOf



// CORE-CONCEPTSONE



// // variable: let , const.

// let money = 30;
// money = 12;
// const name = 'kudus'; 

// let isConfident = false;

// const person ={
//     name : 'kudus',
//     age: 55,
//     city : 'dhaka'
// }
// const statement = `this person ${name} with age ${person.age}`;

// // condition
// if(money >21 && age >= 45){

// }
// else{

// }

// // array 
// const number = [34, 23, 12];
// const respected = ['motiur', 'jahagir' ];
// const products = [{name:'laptop', price:500 }, {name: 'mobile', price:400},{name:'mouse',price:300}];

// //  loop: for loop
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
    
// }

// //function : regular arrow
// function add (num1 ,num2){
//     return num1 + num2;
// }
// const result = add(34, 45);

// //arrow
// const fiveTimes = num => num * 5 ;
// const add2 = (num1 , num2)=> num1 +num2;
// const doMath = (x,y)=>{
//     const sum = x+ y ;
//     return sum * 2;
// }