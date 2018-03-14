"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class RecordParser {
    constructor(filePath) {
        this.filePath = filePath;
        this.filePath = filePath;
    }
    parseRecords() {
        const rawRecords = this.readRawRecords();
        const seperateRecords = this.seperateRawRecords(rawRecords);
        return this.mapRawRecords(seperateRecords);
    }
    readRawRecords() {
        const rawRecords = fs.readFileSync(this.filePath, "utf8");
        return rawRecords;
    }
    seperateRawRecords(rawRecords) {
        return rawRecords.split("\n");
    }
    mapRawRecords(rawRecords) {
        return rawRecords.map((record) => this.mapRawRecord(record));
    }
    mapRawRecord(rawRecord) {
        const seperateRecord = this.seperateRecordAttributes(rawRecord);
        const [name, releaseDate, runtime, director] = seperateRecord;
        return { name, releaseDate, runtime, director };
    }
    seperateRecordAttributes(rawRecord) {
        return rawRecord.split(" | ");
    }
}
exports.RecordParser = RecordParser;
//# sourceMappingURL=record-parser.js.map