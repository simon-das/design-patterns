from abc import ABC, abstractmethod


class Animal(ABC):
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
