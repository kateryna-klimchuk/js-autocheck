// Task 10

// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// Класс ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Объяви следующие методы класса:

// getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
//     addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в
// свойстве items объекта который вызывает этот метод.
//     removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в
// свойстве items объекта который вызывает этот метод.


class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    removeItem(itemToRemove) {
        this.items.splice(this.items.indexOf(itemToRemove), 1);
    }
}


// Change code above this line

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// Task 16

// Выполни рефакторинг класса Car.Добавь публичное статическое свойство MAX_PRICE со
// значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice.Если оно
// больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

class Car {
  // Change code below this line
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE) {
      this.#price = newPrice;
      }
  }

  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
