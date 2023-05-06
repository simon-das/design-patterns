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
