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
