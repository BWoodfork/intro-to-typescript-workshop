import { RecordSorter } from "./record-sorter"
import { RecordParser } from "./record-parser"

export function run(): void {
  const parser = new RecordParser("raw-records.txt")
  const sorter = new RecordSorter()
  const parsedRecords = parser.parseRecords()
  const sortedByReleaseDate = sorter.sortByReleaseDate(parsedRecords)
  const sortByRecordName = sorter.sortRecordsByName(parsedRecords)

  console.log(sortedByReleaseDate)
  console.log("----------------------")
  console.log(sortByRecordName)
}

run()
