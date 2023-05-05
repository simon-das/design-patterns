class Animal {
    speak() {
        throw new Error('Method not implemented');
    }
}

class Dog extends Animal {
    speak() {
        return 'Woof!';
    }
}

class Cat extends Animal {
    speak() {
        return 'Meow!';
    }
}

class AnimalFactory {
    static createAnimal(type) {
        if (type === 'dog') {
            return new Dog();
        } else if (type === 'cat') {
            return new Cat();
        } else {
            throw new Error('Invalid animal type');
        }
    }
}

const dog = AnimalFactory.createAnimal('dog');
const cat = AnimalFactory.createAnimal('cat');

console.log(dog.speak());
console.log(cat.speak());
