The basic idea behind the Factory pattern is to provide `a centralized point for creating objects where the creation logic can be encapsulated and hidden from the client`. This allows the client to be decoupled from the actual object creation process and makes the code more maintainable and extensible.
<br> It is used when we have a class or method that creates and returns one of several related objects based on input or some other criteria. By using a factory method or class, we can simply add new classes to the system and make a few changes to the factory code to support the new classes.

1. **Creating objects with complex creation logic**: When creating an object requires complex steps or calculations, it can be beneficial to encapsulate that logic within a factory method rather than in the client code.
2. **Dynamic object creation**: When the exact type of object needed is not known until runtime, a factory can be used to create the object based on the runtime conditions.
3. **Code maintainability**: By encapsulating object creation within a factory method, it can be easier to maintain and update the codebase. If changes need to be made to the object creation process, it only needs to be updated in the factory method rather than all over the client code.
4. **Decoupling object creation from client code**: Using a factory can decouple object creation from client code, allowing for easier testing and refactoring.
5. **Managing object lifecycle**: In some cases, a factory can also manage the lifecycle of objects, such as caching or reusing previously created objects.

<br>

<h2>Python Implementation</h2>

    from abc import abstractmethod


    class Animal:
        @abstractmethod
        def speak(self):
            pass


    class Dog(Animal):
        def speak(self):
            return 'Woof!'


    class Cat(Animal):
        def speak(self):
            return 'Meow!'


    class AnimalFactory:
        @staticmethod
        def create_animal(type):
            if type == 'dog':
                return Dog()
            elif type == 'cat':
                return Cat()
            else:
                raise ValueError('Invalid animal type')


    if __name__ == '__main__':
        dog = AnimalFactory.create_animal('dog')
        cat = AnimalFactory.create_animal('cat')

        print(dog.speak()) # Output: Woof!
        print(cat.speak()) # Output: Meow!
        
<br>

<h2>JavaScript Implementation</h2>

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

    console.log(dog.speak()); // Output: Woof!
    console.log(cat.speak()); // Output: Meow!
