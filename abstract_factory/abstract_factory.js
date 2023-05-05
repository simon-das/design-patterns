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
