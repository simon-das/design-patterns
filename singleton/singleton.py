class Singleton:
    __instance = None

    def __new__(self):
        if not self.__instance:
            self.__instance = super().__new__(self)

        return self.__instance

s1 = Singleton()
s2 = Singleton()

print(s1 is s2)
    