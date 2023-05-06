# Decorator Pattern

The Decorator design pattern is a structural design pattern that allows you to `add behavior to an object dynamically without affecting the behavior of other objects from the same class`. The pattern involves creating a decorator class that `wraps the original class, and then adding additional functionality to it`. 

In simple terms, the Decorator pattern lets you add new features to an existing object dynamically, without having to change its original code. It is like wrapping a gift box with different layers of paper and ribbons to make it more attractive, while keeping the original gift intact.

### A few use cases
1. **Adding features to existing classes**: The Decorator pattern is useful when you want to add functionality to an existing class without modifying its code. You can create a new class that implements the same interface as the original class and adds the desired functionality. This makes it easy to add new features to the class without affecting its existing behavior.
2. **Dynamic behavior modification**: With the Decorator pattern, you can modify the behavior of an object at runtime. This can be useful in situations where you need to change the behavior of an object based on user input or other external factors.
3. **Separating concerns**: The Decorator pattern can be used to separate concerns in your code. You can create a separate decorator class for each concern, such as logging or caching, and add them to your objects as needed. This makes it easier to maintain and modify your code.
4. **Code reuse**: The Decorator pattern allows you to reuse existing code by creating new classes that add functionality to existing classes. This can save you time and effort by allowing you to build on existing code rather than starting from scratch.
5. **Testing**: The Decorator pattern can be useful in testing environments where you need to modify the behavior of objects for testing purposes. You can create a decorator class that adds the necessary testing functionality, such as logging or data collection, to the object being tested. This allows you to test the object in a controlled environment without affecting its existing behavior in production.

<br>

## Example
Let's say you're building a coffee ordering system, and you have a base Coffee class that represents a basic cup of coffee. You want to give customers the option to add extras to their coffee, such as milk, sugar, or whipped cream. Rather than creating separate classes for every possible combination of coffee and extras, you can use the Decorator pattern to dynamically add extras to a basic cup of coffee.

<br>

## Python Implementation
    class Coffee:
        def get_price(self):
            return 2.0


    class MilkCoffee:
        def __init__(self, coffee):
            self.coffee = coffee

        def get_price(self):
            return self.coffee.get_price() + 0.5


    class SugarCoffee:
        def __init__(self, coffee):
            self.coffee = coffee

        def get_price(self):
            return self.coffee.get_price() + 0.2


    class WhippedCreamCoffee:
        def __init__(self, coffee):
            self.coffee = coffee

        def get_price(self):
            return self.coffee.get_price() + 1.0


    if __name__ == '__main__':
        coffee =  Coffee()
        milk_coffee = MilkCoffee(coffee)
        sugar_milk_coffee = SugarCoffee(milk_coffee)
        whipped_cream_sugar_milk_coffee = WhippedCreamCoffee(sugar_milk_coffee)

        print(f'Coffee price: {whipped_cream_sugar_milk_coffee.get_price()}$') # Output: Coffee price: 3.7$
        
<br>

## JavaScript Implementation
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
