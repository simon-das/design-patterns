# Adapter Pattern
The Adapter design pattern is `a structural design pattern that allows objects with incompatible interfaces to work together`. It involves creating an adapter class that `acts as a bridge between two incompatible interfaces, allowing them to communicate and work together seamlessly`.

The Adapter pattern is useful in situations where we have existing classes or libraries with incompatible interfaces that need to be used together. Rather than modifying the existing code to make it compatible, which can be time-consuming and error-prone, we can create an adapter class that handles the translation between the two interfaces.

### A few use cases
1. **Legacy code integration**: When you need to use old, legacy code that does not have the same interface as your new code, you can create an adapter that acts as a bridge between the two.
2. **Third-party library integration**: Similar to legacy code integration, you may need to integrate with a third-party library that does not have the interface you need. By using an adapter, you can make the third-party library work with your code.
3. **Interface standardization**: In a large software system with multiple components, each component may use a different interface to interact with other components. By using adapters, you can create a common interface between the components, making them work together seamlessly.
4. **Code modularity**: Adapters can be used to keep code modular and separate concerns. For example, suppose you have a module that requires data in a specific format, but the data you have is in a different format. Instead of modifying the original module, you can create an adapter that transforms the data into the required format. This way, you can isolate the dependency on the data format and make the module more flexible and maintainable. Additionally, if you need to change the data format in the future, you only need to modify the adapter, rather than the entire module.

<br>

## Example
Let's say you have a legacy library that provides an interface to read data from a CSV file, but your new code expects data to be in JSON format. You can use the adapter pattern to create a wrapper class that adapts the CSV interface to the expected JSON interface.

<br>

## Python Implementation
    import csv, json


    class CSVAdapter:
        def __init__(self, csv_file):
            self.csv_file = csv_file

        def read_json(self):
            data = []

            with open(self.csv_file) as file:
                csv_reader = csv.DictReader(file)

                for row in csv_reader:
                    data.append(row)

            return json.dumps(data)


    if __name__ == '__main__':
        csv_adapter = CSVAdapter('data.csv')
        json_data = csv_adapter.read_json()

        print(json_data)

<br>

## JavaScript Implementation
    const csv = require('csvtojson');

    class CSVAdapter {
        constructor(csvFile) {
            this.csvFile = csvFile;
        }

        async readJson() {
            const data = await csv().fromFile(this.csvFile);

            return JSON.stringify(data);
        }
    }

    const csvAdapter = new CSVAdapter('data.csv');
    csvAdapter.readJson().then(data => {
        console.log(data);
    });
