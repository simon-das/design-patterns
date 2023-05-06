# Command interface
class Command:
    def execute(self):
        pass


# Concrete command: turn the light on
class LightOnCommand:
    def __init__(self, light):
        self.light = light

    def execute(self):
        self.light.on()


# Concrete command: turn the light off
class LightOffCommand:
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
