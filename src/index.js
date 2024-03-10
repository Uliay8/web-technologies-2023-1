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

class Topping extends CorePizza {
}

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
        return  this.size.name;
    }
    setSize(sizeOfPizza) {
        this.size = sizeOfPizza;
    }
    setType(typeOfPizza) {
        this.pizzaType = typeOfPizza;
    }

    getStuffing() {
        console.log("Вид пиццы: " + this.pizzaType.name);
    }

    calculatePrice() {
        let price = this.pizzaType.price + this.size.price;
        for (let i = 0; i < this.toppings.length; i++) {
            if (this.size == small) price += this.toppings[i].price;
            else {price += this.toppings[i].price*2;}
        }
        console.log("Цена пиццы: " + price);
        return price
    }

    calculateCalories() {
        let calories = this.pizzaType.calories + this.size.calories;
        for (let i = 0; i < this.toppings.length; i++) {
            if (this.size == small) calories += this.toppings[i].calories;
            else {calories += this.toppings[i].calories*2;}
        }
        console.log("Количество калорий в пицце: " + calories);
        return calories
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
// let creamyMozzarellaBig = new Topping("Сливочная моцарелла", 100, 60);
// let cheeseCrustBig = new Topping("Сырный борт", 300, 100);
// let cheddarAndParmesanBig = new Topping("Чеддер и пармезан", 300, 100);

// console.log("\n");
// let pizza = new Pizza(margarita, big);
// pizza.addTopping(creamyMozzarellaBig);
// pizza.addTopping(cheeseCrustBig);
// pizza.addTopping(cheddarAndParmesanBig);
// pizza.getToppings();
// pizza.removeTopping(creamyMozzarellaBig);
//
// pizza.getToppings();
// pizza.getStuffing();
// pizza.getSize();
//
// pizza.calculatePrice();
// pizza.calculateCalories();

let currentPizza = new Pizza(pepperoni, small);
const buttonCalculate = document.getElementById("buttonCalculate");

let arrayPizzaId = ['margaritaPizza', 'pepperoniPizza', 'bavarianPizza'];
let arrayToppingId = ['Сливочная моцарелла', 'Сырный борт', 'Чеддер и пармезан']
function typeFromIdPizza (i) {
    switch (i) {
        case 'margaritaPizza': return margarita;
        case 'pepperoniPizza': return pepperoni;
        case 'bavarianPizza': return bavarian;
    }
}
function toppingFromToppingId (i) {
    switch (i) {
        case 'Сливочная моцарелла': return creamyMozzarella;
        case 'Сырный борт': return cheeseCrust;
        case 'Чеддер и пармезан': return cheddarAndParmesan;
    }
}
function sizeFromNameSize (i) {
    switch (i) {
        case 'Маленькая': return small;
        case 'Большая': return big;
    }
}
function displayOnButton() {
    buttonCalculate.innerHTML =
        `Добавить в корзину<br>${currentPizza.calculatePrice()}₽ (${currentPizza.calculateCalories()} кКалл)`;
}
function changeCurrentPizza(idOfPizza) {
    if (!document.getElementById(idOfPizza).classList.contains("currentPizza")) {
        for (let i=0; i < document.getElementsByClassName("typeOfPizza").length; i++) {
            document.getElementById(arrayPizzaId[i]).classList.remove("currentPizza");
        }
        document.getElementById(idOfPizza).classList.add("currentPizza");
        currentPizza.setType(typeFromIdPizza(idOfPizza));
        displayOnButton();
    }
}

function changeSizeOfPizza(someOption) {
    let nameofSize = someOption.options[someOption.selectedIndex].value;
    if (currentPizza.getSize() != nameofSize) {
        currentPizza.setSize(sizeFromNameSize(nameofSize));
        displayOnButton();
    }
}
function changeToppings(idOfTopping) {
    if (!document.getElementById(idOfTopping).classList.contains("currentTopping")) {
        document.getElementById(idOfTopping).classList.add("currentTopping");
        currentPizza.addTopping(toppingFromToppingId(idOfTopping))
    }
    else {
        document.getElementById(idOfTopping).classList.remove('currentTopping');
        currentPizza.removeTopping(toppingFromToppingId(idOfTopping));
    }
    displayOnButton();
}




