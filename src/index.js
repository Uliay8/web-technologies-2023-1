class CorePizza {
    name;
    price;
    calories;

    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}

class Topping extends CorePizza {}

class TypeOfPizza extends CorePizza {}

class SizeOfPizza extends CorePizza {}

class Pizza {
    pizzaType;
    size;
    toppings = [];

    constructor(typeOfPizza, sizeOfPizza) {
        this.pizzaType = typeOfPizza;
        this.size = sizeOfPizza;
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    removeTopping(topping) {
        for (let i = 0; i < this.toppings.length; i++) {
            if (this.toppings[i] === topping) {
                this.toppings.splice(i, 1);
                break;
            }
        }
    }

    getToppings() {
        let strToppings = "Добавки:\n";
        for (let i = 0; i < this.toppings.length; i++) {
            strToppings += this.toppings[i].name + ",\n";
        }
        strToppings = strToppings.substring(0, strToppings.length-2) + ";";
        console.log(strToppings);
    }

    getSize() {
        console.log("Размер пиццы: " + this.size.name);
    }

    getStuffing() {
        console.log("Вид пиццы: " + this.pizzaType.name);
    }

    calculatePrice() {
        let price = this.pizzaType.price + this.size.price;
        for (let i = 0; i < this.toppings.length; i++) {
            price += this.toppings[i].price;
        }
        console.log("Цена пиццы: " + price);
    }

    calculateCalories() {
        let calories = this.pizzaType.calories + this.size.calories;
        for (let i = 0; i < this.toppings.length; i++) {
            calories += this.toppings[i].calories;
        }
        console.log("Количество калорий в пицце: " + calories);
    }
}

let margarita = new TypeOfPizza("Маргарита", 500, 300)
let pepperoni = new TypeOfPizza("Пепперони", 800, 400);
let bavarian = new TypeOfPizza("Баварская", 700, 450);

let big = new SizeOfPizza("Большая", 200, 200);
let small = new SizeOfPizza("Маленькая", 100, 100);

let creamyMozzarella = new Topping("Сливочная моцарелла", 50, 30);
let cheeseCrust = new Topping("Сырный борт", 150, 50);
let cheddarAndParmesan = new Topping("Чеддер и пармезан", 150, 50);
let creamyMozzarellaBig = new Topping("Сливочная моцарелла", 100, 50);
let cheeseCrustBig = new Topping("Сырный борт", 300, 50);
let cheddarAndParmesanBig = new Topping("Чеддер и пармезан", 300, 50);

console.log("\n");
let pizza = new Pizza(margarita, big);
pizza.addTopping(creamyMozzarellaBig);
pizza.addTopping(cheeseCrustBig);
pizza.addTopping(cheddarAndParmesanBig);
pizza.getToppings();
pizza.removeTopping(creamyMozzarellaBig);

pizza.getToppings();
pizza.getStuffing();
pizza.getSize();

pizza.calculatePrice();
pizza.calculateCalories();
