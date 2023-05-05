from abc import ABC, abstractmethod


# Abstract Product A
class Shape(ABC):
    @abstractmethod
    def draw(self):
        pass


# Concrete Product A1
class Circle(Shape):
    def draw(self):
        print('Drawing a circle')


# Concrete Product A2
class Rectangle(Shape):
    def draw(self):
        print('Drawing a rectangle')


# Abstract Product B
class Color(ABC):
    @abstractmethod
    def fill(self):
        pass


# Concrete Product B1
class Red(Color):
    def fill(self):
        print('Filling with red')


# Concrete Product B2
class Blue(Color):
    def fill(self):
        print('Filling with blue')


# Abstract Factory
class AbstractFactory(ABC):
    @abstractmethod
    def create_shape(self):
        pass

    @abstractmethod
    def create_color(self):
        pass


# Concrete Factory 1
class RedCircleFactory:
    def create_color(self):
        return Red()

    def create_shape(self):
        return Circle()
    

# Concrete Factory 2
class BlueRectangleFactory:
    def create_color(self):
        return Blue()

    def create_shape(self):
        return Rectangle()


if __name__ == '__main__':
    factory1 = RedCircleFactory()
    shape1 = factory1.create_shape()
    color1 = factory1.create_color()
    shape1.draw()
    color1.fill()

    print()

    factory2 = BlueRectangleFactory()
    shape2 = factory2.create_shape()
    color2 = factory2.create_color()
    shape2.draw()
    color2.fill()
