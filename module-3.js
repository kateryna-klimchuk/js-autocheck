
// // M-3. Objects

// // ============ Adding object to object ===============

// // Добавь объекту apartment несколько новых свойств:

// // area - площадь в квадратных метрах, число 60;
// // rooms - количество комнат, число 3;
// // location - местоположение квартиры, обьект со следующими вложенными свойствами;
// // country - страна, строка "Jamaica";
// // city - город, строка "Kingston".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: 'Jamaica',
//     city: 'Kingston',
// };


// console.log(apartment.location.city);



// // Task 14.

// // Выполни рефакторинг функции countProps(object) используя метод Object.keys() и,
// // возможно, но необязательно, цикл for...of.



// function countProps(object) {
//   // Change code below this line

//   let propCount = 0;
//   const keys = Object.keys(object);

//     for (const key of keys) {
//          propCount += 1;
    
//     }

//     // ----- second option of solution ----

// //     for (const key in object) {
// //       propCount += 1;
// //
// //   }

//   return propCount;
//   // Change code above this line
// }


// // Task 18.

// // Напиши функцию getProductPrice(productName) которая принимает
// // один параметр productName - название продукта.Функция ищет объект
// // продукта с таким именем(свойство name) в массиве products и
// // возвращает его цену(свойство price).Если продукт с таким названием не найден,
// //     функция должна возвращать null.


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//     for (const product of products) {
//         if (product.name === productName)
//         return product.price;
// }
// return null;


//   // Change code above this line
// }


// Task 19.

// Напиши функцию getAllPropValues(propName) которая принимает один параметр
// propName - имя(ключ) свойства.Функция должна вернуть массив всех значений
// свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// let newArray = [];
// for (const product of products) {
//     for (const key in product) {
//         if (key === propName) {
//             newArray.push(product[propName]);
//         }
//     }
//     }
// return newArray;
 
//   // Change code above this line
// }


// getAllPropValues("name");
// console.log(getAllPropValues());

// getAllPropValues("quantity");
// console.log(getAllPropValues());

// getAllPropValues("price");
// console.log(getAllPropValues());

// getAllPropValues("category");
// console.log(getAllPropValues());


// Task 20.

// Напиши функцию calculateTotalPrice(productName) которая принимает один
// параметр productName - название товара.Функция должна вернуть общую
// стоимость(цена * количество) товара с таким именем из массива products.


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//     totalPrice = product.price * product.quantity;
//     return totalPrice;
//     }
//   }
//     return totalPrice;

//   // Пиши код выше этой строки
// }

// calculateTotalPrice("Blaster");
// console.log(calculateTotalPrice());
// calculateTotalPrice("Radar");
// console.log(calculateTotalPrice());

// calculateTotalPrice("Droid");
// console.log(calculateTotalPrice());

// calculateTotalPrice("Grip");
// console.log(calculateTotalPrice());

// calculateTotalPrice("Scanner");
// console.log(calculateTotalPrice());


// Task 30.

// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.
// В новом объекте должно быть свойство completed, значение которого хранится в одноимённой
// локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority,
//     могут отсутствовать.Тогда, в новом объекте задачи, в свойствах category и priority должны быть
//     значения по умолчанию, хранящиеся в одноимённых локальных переменных.


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const first = { category, priority, completed };
//   return second = { ...first, ...data };

//   // Change code above this line
// }

// makeTask({}) { category: 'General', priority: 'Normal', completed: false }


// makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }) { category: 'Homemade', priority: 'Low', text: 'Take out the trash', completed: false }


// makeTask({ category: 'Finance', text: 'Take interest' }) { category: 'Finance', priority: 'Normal', text: 'Take interest', completed: false }


// makeTask({ priority: 'Low', text: 'Choose shampoo' }) { category: 'General', priority: 'Low', text: 'Choose shampoo', completed: false }


// makeTask({ text: 'Buy bread' }) { category: 'General', priority: 'Normal', text: 'Buy bread', completed: false }

// Task 33.

// Функция findMatches() принимает произвольное количество аргументов.
// Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в
// котором будут только те аргументы, начиная со второго, которые есть в
// массиве первого аргумента.

//     Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив[1, 2],
//         потому что только они есть в массиве первого аргумента.

// Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     for (const el of array) {
//       if (arg === el) {
//         matches.push(arg);
//       }
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)` возвращает `[1, 2]`

// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)` возвращает `[17, 89, 2]`

// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)` возвращает `[24, 9, 41]`

// findMatches([63, 11, 8, 29], 4, 7, 16)` возвращает `[]`

// Task 40.

// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял
// название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const indexName = this.potions.indexOf(oldName);
//     this.potions.splice(indexName, 1, newName);


//     // Change code above this line
//   },
// };

// Task 41.



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//     addPotion(newPotion) {
//       for (const item of this.potions) {

//           if (item.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//  ;
//     }
//     }
//         this.potions.push(newPotion);
//     },

//   removePotion(potionName) {

//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       const item = potions[i];
//       if (potionName === item.name) {
//             potions.splice(i, 1);
//       }
//       }
//     return;
//     },
  
//     updatePotionName(oldName, newName) {
//             const { potions } = this;


//         for (let i = 0; i < potions.length; i += 1) {
//             console.log(i);
//             if (oldName === potions[i].name) {
//                 potions[i].name = newName;
//             }
//         }
//   },
//   // Change code above this line
// };


// atTheOldToad.getPotions();
// console.log(atTheOldToad.getPotions());

// // atTheOldToad.addPotion({ name: "romery", price: 620 });
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 520 });
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });

// // atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');

// console.log(atTheOldToad.getPotions());


// // console.log(atTheOldToad.addPotion());

// // console.log(atTheOldToad);

