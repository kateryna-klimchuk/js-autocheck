// M-2. Arrays and function


// =========== Searching common elements at two arrays ================


const element = function getCommonElements(array1, array2) {
  // Change code below this line
    let commonArray = [];

    for (const element of array1) {
        for (const element2 of array2) {
            if (array2.includes(element)) {
                commonArray.push(element);
                break;
            }
            
        }
    }
    

    return commonArray;

 // Change code above this line
}

const total = element([2, 2, 3, 5, 6], [4, 5, 6, 10]);

console.log(total);


// M-3. Objects

// ============ Adding object to object ===============

// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
    country: 'Jamaica',
    city: 'Kingston',
};


console.log(apartment.location.city);



// Task 14.

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, 
// возможно, но необязательно, цикл for...of.



function countProps(object) {
  // Change code below this line

  let propCount = 0;
  const keys = Object.keys(object);

    for (const key of keys) {
         propCount += 1;
    
    }

    // ----- second option of solution ----

//     for (const key in object) {
//       propCount += 1;
// 
//   }

  return propCount;
  // Change code above this line
}

