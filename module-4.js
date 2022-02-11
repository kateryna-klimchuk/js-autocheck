// Task 4

// Необходимо написать логику обработки заказа пиццы.Выполни рефакторинг метода 
// order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess 
// и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order 
// должен возвращать результат вызова колбэка onError, передавая ему аргументом 
// строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод 
// order должен возвращать результат вызова колбэка onSuccess, передавая ему 
// аргументом имя заказанной пиццы.


const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {

        for (let i = 0; i < this.pizzas.length; i += 1) {
            if (this.pizzas[i] === pizzaName) {
                return onSuccess(pizzaName);
            }
        }
        return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);

    
    },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);
console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));





// =========== From Repeta lesson ======

// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };

// const callback1 = function (value) {
//     return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//     return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);


// Task 19

// Дополни код так, чтобы в переменной evenNumbers получился
// массив чётных чисел из массива numbers, а в переменной
// oddNumbers массив нечётных.Обязательно используй метод filter().


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);


// // Task 20

// // Дополни код так, чтобы в переменной allGenres был массив всех жанров книг
// //     (свойство genres) из массива books, а в переменной uniqueGenres массив
// //     уникальных жанров - без повторений.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);



// Task 24

// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив
// пользователей у которых есть друг с именем в параметре friendName.
// Массив друзей пользователя хранится в свойстве friends.


// const getUsersWithFriend = (users, friendName) => {
//     const userFriend = users.filter(user =>  user.friends.includes(friendName))
//     return userFriend;
   
// };


const clients = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
        age: 37
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
        age: 34
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
        age: 24
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
        age: 21
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
        age: 27
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
        age: 38
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
        age: 39
    }
];

// console.log(clients);


// getUsersWithFriend(clients, "blue");
// console.log(getUsersWithFriend(clients, "Sharron Pace"));


// Task 25

// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей
// всех пользователей(свойство friends).У нескольких пользователей могут
// быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends);
//     const uniqueFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
//     return uniqueFriends;
   
// };

// console.log(getFriends(clients));


// Task 41

// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени 
// автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по 
// имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по 
// возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по 
// убыванию рейтинга.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));

const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);


// Task 45

// Дополни код так, чтобы в переменной names получился массив имён авторов 
// в алфавитном порядке, рейтинг книг которых больше значения 
// переменной MIN_BOOK_RATING.


const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor)).filter((author, index, array) => array.indexOf(author) === index);

// console.log(names);


// Task 46

// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала
// массив имён пользователей отсортированный по
// возрастанию количества их друзей(свойство friends).


// const getNamesSortedByFriendCount = users => {
//     const numOfFriends = [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
//     return numOfFriends;
   
// };

// console.log(getNamesSortedByFriendCount(clients));

// Task 47.

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала 
// массив уникальных имён друзей(свойство friends) отсортированный по алфавиту.



const getSortedFriends = users => {
    const uniqueFriends = users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index).sort((a, b) => a.localeCompare(b));
    return uniqueFriends;
   
};

console.log(getSortedFriends(clients));

// Task 48

// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она
// возвращала общий баланс пользователей(свойство balance), пол которых(свойство gender)
// совпадает со значением параметра gender.

const getTotalBalanceByGender = (users, gender) => {
    const totalBalance = users.filter(user => user.gender === gender).map(user => user.balance).reduce((total, user) => {
        return total + user;

    }, 0);
    return totalBalance;
   
};


console.log(getTotalBalanceByGender(clients, "female"));
