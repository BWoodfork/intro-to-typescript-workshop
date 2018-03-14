"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const moment = require("moment");
class RecordSorter {
    sortRecordsByName(records) {
        return lodash_1._.sortBy(records, (record) => record.name);
    }
    sortByReleaseDate(records) {
        const parseDates = records.map((record) => this.parseDate(record));
        const recordsSortedByDate = lodash_1._.sortBy(parseDates, (record) => record.releaseDate);
        return recordsSortedByDate.map((record) => this.formatRecordDate(record));
    }
    formatRecordDate(record) {
        const convertDateToString = (date) => moment(date).format("MM-DD-YYYY");
        return lodash_1._.update(record, "releaseDate", convertDateToString);
    }
    parseDate(record) {
        const convertStringToDate = (dateString) => new Date(dateString);
        return lodash_1._.update(record, "releaseDate", convertStringToDate);
    }
}
exports.RecordSorter = RecordSorter;
//# sourceMappingURL=record-sorter.js.map