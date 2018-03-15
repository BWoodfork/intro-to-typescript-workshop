import { RecordSorter } from "./record-sorter"
import { RecordParser } from "./record-parser"

export function run(): void {
  const parser = new RecordParser("raw-records.txt")
  const sorter = new RecordSorter()
  const parsedRecords = parser.parseRecords()
  const sortedRecords = sorter.sortByReleaseDate(parsedRecords)

  console.log(sortedRecords)
}

run()
