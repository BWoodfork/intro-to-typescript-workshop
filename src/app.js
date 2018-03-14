"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const record_parser_1 = require("../src/record-parser");
const record_sorter_1 = require("./record-sorter");
function run() {
    const parser = new record_parser_1.RecordParser("raw-records.txt");
    const sorter = new record_sorter_1.RecordSorter();
    const parsedRecords = parser.parseRecords();
    const sortedRecords = sorter.sortByReleaseDate(parsedRecords);
    return sortedRecords;
}
exports.run = run;
run();
//# sourceMappingURL=app.js.map