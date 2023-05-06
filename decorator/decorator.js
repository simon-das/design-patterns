class Coffee {
    getPrice() {
        return 2.0;
    }
}

class MilkCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getPrice() {
        return this.coffee.getPrice() + 0.5;
    }
}

class SugarCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getPrice() {
        return this.coffee.getPrice() + 0.2;
    }
}

class WhippedCreamCoffee {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getPrice() {
        return this.coffee.getPrice() + 1.0;
    }
}

const coffee = new Coffee();
const milkCoffee = new MilkCoffee(coffee);
const sugarMilkCoffee = new SugarCoffee(milkCoffee);
const whippedCreamSugarMilkCoffee = new WhippedCreamCoffee(sugarMilkCoffee);

console.log(`Coffee price: ${whippedCreamSugarMilkCoffee.getPrice()}$`); // Output: Coffee price: 3.7$
