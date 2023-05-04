class Singleton:
    __instance = None

    def __new__(self):
        if self.__instance is None:
            self.__instance = super().__new__(self)

        return self.__instance

first_instance = Singleton()
second_instance = Singleton()

print(first_instance is second_instance) # True
