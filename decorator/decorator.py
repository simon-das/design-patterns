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
