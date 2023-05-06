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
