# Abstract Factory

Abstract Factory is a creational design pattern that `provides an interface for creating related families of objects without specifying their concrete classes`. It is `a higher-level factory which groups the individuals, related factories/families`.

This pattern is useful in situations where the system has to work with multiple families of related products, and the product objects in a family are designed to work together. By using the Abstract Factory pattern, the system can work with objects from a particular family, without worrying about the details of how the objects are created or how they work together.

*In simple terms*, the Abstract Factory design pattern provides an interface that creates a bunch of related objects with different methods. The interface doesn't contain any concrete implementation. The client code uses the interface to create objects.

### A Few Use Cases
1. **Graphical User Interface (GUI) toolkits**: Toolkits for building GUIs often use the Abstract Factory pattern to provide different sets of widgets for different platforms. For example, a GUI toolkit might provide one set of widgets for Windows and another set of widgets for macOS.
2. **Database drivers**: Database drivers can use the Abstract Factory pattern to provide a common interface for working with different databases. For example, a database driver might provide one set of classes for working with MySQL and another set of classes for working with PostgreSQL.
3. **Operating system APIs**: Operating system APIs can use the Abstract Factory pattern to provide a common interface for working with different operating systems. For example, an operating system API might provide one set of functions for working with Windows and another set of functions for working with Linux.
4. **Game development**: Game development frameworks often use the Abstract Factory pattern to provide different implementations of game objects depending on the platform. For example, a game engine might provide one set of classes for rendering graphics on desktop platforms and another set of classes for rendering graphics on mobile platforms.
5. **E-commerce platforms**: E-commerce platforms can use the Abstract Factory pattern to provide different implementations of payment gateways depending on the customer's location. For example, an e-commerce platform might provide one set of classes for processing credit card payments in the United States and another set of classes for processing bank transfer payments in Europe.

<br>

## Example
Get ready to paint a picture with Abstract Factory design pattern! With this pattern, we can create specific shapes and colors. To start with, we need two abstract classes, Shape and Color, which will be used to create different products. To bring these products to life, we'll need four concrete classes - Rectangle, Circle, Red, and Blue - made with the Shape and Color interfaces.
<br> <br>
But how do we create these objects? That's where the AbstractFactory and its concrete factory classes RedCircleFactory and BlueRectangleFactory come in. These factory classes implement the AbstractFactory and give us the ability to create different combinations of Shape and Color objects, without needing to know the specific details of how they're implemented.
<br> <br>
Let's see this in action. By creating instances of the concrete factory classes, we can create different Shape and Color objects. With the first factory, we can create a Circle with a Red color. With the second factory, we can create a Rectangle with a Blue color. The possibilities are endless with Abstract Factory!

<br>

## Python Implementation
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

<br>

## JavaScript Implementation
    // Abstract Product A
    class Shape {
        draw() {
            throw new Error('Method not implemented');
        }
    }

    // Concrete Product A1
    class Circle extends Shape {
        draw() {
            console.log('Drawing a circle');
        }
    }

    // Concrete Product A2
    class Rectangle extends Shape {
        draw() {
            console.log('Drawing a rectangle');
        }
    }

    // Abstract Product B
    class Color {
        fill() {
            throw new Error('Method not implemented');
        }
    }

    // Concrete Product B1
    class Red extends Color {
        fill() {
            console.log('Filling with red');
        }
    }

    // Concrete Product B2
    class Blue extends Color {
        fill() {
            console.log('Filling with blue');
        }
    }

    // Abstract Factory
    class AbstractFactory {
        createShape() {
            throw new Error('Method not implemented');
        }

        createColor() {
            throw new Error('Method not implemented');
        }
    }

    // Concrete Factory 1
    class RedCircleFactory extends AbstractFactory {
        createShape() {
            return new Circle();
        }

        createColor() {
            return new Red();
        }
    }

    // Concrete Factory 2
    class BlueRectangleFactory extends AbstractFactory {
        createShape() {
            return new Rectangle();
        }

        createColor() {
            return new Blue();
        }
    }

    // Client Code
    const factory1 = new RedCircleFactory();
    const shape1 = factory1.createShape();
    const color1 = factory1.createColor();
    shape1.draw();
    color1.fill();

    console.log();

    const factory2 = new BlueRectangleFactory();
    const shape2 = factory2.createShape();
    const color2 = factory2.createColor();
    shape2.draw();
    color2.fill();
