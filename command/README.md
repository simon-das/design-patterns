# Command Pattern
The Command design pattern is `a behavioral pattern that helps decouple the sender of a request from the receiver by encapsulating a request as an object`. This `allows the sender to issue requests without knowing anything about the receiver, and the receiver can execute the request without knowing anything about the sender or the request itself`. In other words, the pattern enables the creation of objects that represent actions or commands, and these objects can be passed around and executed as needed.

*Basically*, the request is turned into a command and given to the invoker object. The invoker object finds the right object to handle the command, and that object performs the command.

### A Few Use Cases
1. **GUI actions**: Command pattern is widely used in GUI (Graphical User Interface) applications. For example, when a user clicks a button, the command object associated with that button is executed.
2. **Transactional systems**: Command pattern is also used in transactional systems where it is required to keep a record of all executed commands for audit and recovery purposes.
3. **Undo/Redo operations**: The Command pattern can be used to implement undo and redo operations in applications. This is done by maintaining a stack of executed commands, and undoing or redoing the last command based on user input.
4. **Remote control systems**: Command pattern is also used in remote control systems, where a remote control sends commands to an appliance to perform specific tasks.
5. **Simulation and gaming systems**: Command pattern can be used in simulation and gaming systems, where user actions need to be translated into commands that are executed in the game or simulation environment.

<br>

## Example
The switch use to on and off light is a good example of Command pattern.

<br>

## Python Implementation
    # Command interface
    class Command:
        def execute(self):
            pass


    # Concrete command: turn the light on
    class LightOnCommand(Command):
        def __init__(self, light):
            self.light = light

        def execute(self):
            self.light.on()


    # Concrete command: turn the light off
    class LightOffCommand(Command):
        def __init__(self, light):
            self.light = light

        def execute(self):
            self.light.off()


    # Invoker
    class Switch:
        def __init__(self, on_command, off_command):
            self.on_command = on_command
            self.off_command = off_command

        def flip_up(self):
            self.on_command.execute()

        def flip_down(self):
            self.off_command.execute()


    # Receiver
    class Light:
        def on(self):
            print('The light is on')

        def off(self):
            print('The light is off')


    if __name__ == '__main__':
        light = Light()

        light_on_command = LightOnCommand(light)
        light_off_command = LightOffCommand(light)

        switch = Switch(light_on_command, light_off_command)

        switch.flip_up() # Output: The light is on
        switch.flip_down() # Output: The light is off
    
<br>

## JavaScript Implementation
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
