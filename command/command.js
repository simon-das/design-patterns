// Command
class Command {
    execute() {
        throw new Error('Method not implemented');
    }
}

// Concrete command: turn on the light
class LightOnCommand {
    constructor(light) {
        this.light = light;
    }

    execute() {
        this.light.on();
    }
}

// Concrete command: turn off the light
class LightOffCommand {
    constructor(light) {
        this.light = light;
    }

    execute() {
        this.light.off();
    }
}

// Invoker
class Switch {
    constructor(onCommand, offCommand) {
        this.onCommand = onCommand;
        this.offCommand = offCommand;
    }

    flip_up() {
        this.onCommand.execute();
    }

    flip_down() {
        this.offCommand.execute();
    }
}

// Receiver
class Light {
    on() {
        console.log('The light is on');
    }

    off() {
        console.log('The light is off');
    }
}

// Client code
const light = new Light();

const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const invokerSwitch = new Switch(lightOnCommand, lightOffCommand);

invokerSwitch.flip_up(); // Output: The light is on
invokerSwitch.flip_down(); // Output: The light is off
