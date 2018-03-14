import { _ } from "lodash"
import { IMovie } from "./record-parser"
import moment from "moment"

export class RecordSorter {
  public sortRecordsByName(records: IMovie[]): IMovie[] {
    return _.sortBy(records, (record) => record.name)
  }

  public sortByReleaseDate(records: IMovie[]): IMovie[] {
    const parseDates = records.map((record) => this.parseDate(record))
    const recordsSortedByDate = _.sortBy(parseDates, (record) => record.releaseDate)

    return recordsSortedByDate.map((record) => this.formatRecordDate(record))
  }

  public formatRecordDate(record: IMovie): IMovie {
    const convertDateToString = (date) => moment(date).format("MM-DD-YYYY")

    return _.update(record, "releaseDate", convertDateToString)
  }

  public parseDate(record: IMovie): IMovie {
    const convertStringToDate = (dateString) => new Date(dateString)

    return _.update(record, "releaseDate", convertStringToDate)
  }
}
