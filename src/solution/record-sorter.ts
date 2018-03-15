import { _ } from "lodash"
import { Movie } from "./record-parser"
import * as moment from "moment"

export class RecordSorter {
  public sortRecordsByName(records: Movie[]): Movie[] {
    return _.sortBy(records, (record) => record.name)
  }

  public sortByReleaseDate(records: Movie[]): Movie[] {
    const parseDates = records.map((record) => this.parseDate(record))
    const recordsSortedByDate = _.sortBy(parseDates, (record) => record.releaseDate)

    return recordsSortedByDate.map((record) => this.formatRecordDate(record))
  }

  public formatRecordDate(record: Movie): Movie {
    const convertDateToString = (date) => moment(date).format("MM-DD-YYYY")

    return { ...record, releaseDate: convertDateToString(record.releaseDate) }
  }

  public parseDate(record: Movie): Movie {
    const convertStringToDate = (dateString) => new Date(dateString)

    return _.update(record, "releaseDate", convertStringToDate)
  }
}
