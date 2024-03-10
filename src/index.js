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
        return price
    }

    calculateCalories() {
        let calories = this.pizzaType.calories + this.size.calories;
        for (let i = 0; i < this.toppings.length; i++) {
            if (this.size == small) calories += this.toppings[i].calories;
            else {calories += this.toppings[i].calories*2;}
        }
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


let currentPizza = new Pizza(margarita, small);
const buttonCalculate = document.getElementById("buttonCalculate");
let arrayPizzaId = ['margaritaPizza', 'pepperoniPizza', 'bavarianPizza'];

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

function changeSizeOfPizza(labelSize) {
    let size;
    if (labelSize.classList.contains("selector-size-switch-big")) {
        labelSize.classList.remove("selector-size-switch-big");
        size = small;
    }
    else {
        labelSize.classList.add("selector-size-switch-big");
        size =big;
    }
    currentPizza.setSize(size);
    displayOnButton();
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




