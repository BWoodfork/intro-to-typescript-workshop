import { RecordParser } from "../src/record-parser"
import { RecordSorter } from "./record-sorter"

export function run() {
  const parser = new RecordParser("raw-records.txt")
  const sorter = new RecordSorter()
  const parsedRecords = parser.parseRecords()
  const sortedRecords = sorter.sortByReleaseDate(parsedRecords)

  return sortedRecords
}

run()
