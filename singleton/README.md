# Singleton Pattern

Singleton design pattern is `a creational pattern that allows creating only one instance of a class in the entire application`. This instance can be accessed from anywhere in the application. The main idea behind this pattern is to ensure that there is only one instance of a class, which can be shared among multiple parts of the application, to save resources and ensure consistency.

1. **Configuration settings**: In many applications, there are configuration settings that need to be accessed from different parts of the code. By using a Singleton to store these settings, they can be easily accessed without the need to pass them around as parameters.
2. **Database connections**: In applications that need to access a database, it's often desirable to use a single database connection throughout the lifetime of the application. By using a Singleton to manage the database connection, it can be shared across different parts of the code.
3. **Logging**: Logging is an important part of many applications, and it's often useful to have a single logger instance that can be used throughout the codebase.
4. **Caching**: In applications that need to cache data, it's often useful to have a single cache instance that can be shared across different parts of the code.
5. **Hardware access**: In embedded systems or applications that need to access hardware devices, it's often necessary to use a Singleton to manage access to the hardware, as multiple access attempts could cause conflicts and errors.

<br>

<h2>Python Implementation</h2>

    class Singleton:
        __instance = None

        def __new__(self):
            if self.__instance is None:
                self.__instance = super().__new__(self)

            return self.__instance

    first_instance = Singleton()
    second_instance = Singleton()

    print(first_instance is second_instance) # True

<br>

<h2>JavaScript Implementation</h2>

    class Singleton {
        constructor() {
            if (!Singleton.instance) {
                Singleton.instance = this;
            }

            return Singleton.instance;
        }
    }

    firstInstance = new Singleton()
    secondInstance = new Singleton()

    console.log(firstInstance === secondInstance) // true
