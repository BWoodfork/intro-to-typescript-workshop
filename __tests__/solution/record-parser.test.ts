import { RecordParser } from "../../src/solution/record-parser"

describe("recordParser", () => {
  let parser

  beforeEach(() => {
    // figure out how to read the filepath from the fixture file...
    const filePath = "raw-records.txt"
    parser = new RecordParser(filePath)
  })

  test("returns a set of raw records", () => {
    expect(parser.readRawRecords()).toContain("Black Panther | 2-16-2018 | 135 | Ryan Coogler")
  })

  test("seperates raw records at newline", () => {
    const rawRecords = parser.readRawRecords()

    expect(parser.seperateRawRecords(rawRecords)[0]).toBe("Harry Potter | 11-16-2001 | 159 | David Yates")
  })

  test("maps raw records to an object", () => {
    const rawRecord = "Black Panther | 2-16-2018 | 135 | Ryan Coogler"
    const mappedRecord = parser.mapRawRecord(rawRecord)

    expect(mappedRecord).toEqual({
      director: "Ryan Coogler",
      name: "Black Panther",
      releaseDate: "2-16-2018",
      runtime: "135"
    })
  })

  test("maps raw records to an object", () => {
    const rawRecord = "Harry Potter | 11-16-2001 | 159 | David Yates"
    const mappedRecord = parser.mapRawRecord(rawRecord)

    expect(mappedRecord).toEqual({
      director: "David Yates",
      name: "Harry Potter",
      releaseDate: "11-16-2001",
      runtime: "159"
    })
  })

  test("maps a collection of raw records to objects", () => {
    const rawRecords = [
      "Black Panther | 2-16-2018 | 135 | Ryan Coogler",
      "Harry Potter | 11-16-2001 | 159 | David Yates"
    ]

    expect(parser.mapRawRecords(rawRecords)).toContainEqual({
      director: "David Yates",
      name: "Harry Potter",
      releaseDate: "11-16-2001",
      runtime: "159"
    })

    expect(parser.mapRawRecords(rawRecords)).toContainEqual({
      director: "Ryan Coogler",
      name: "Black Panther",
      releaseDate: "2-16-2018",
      runtime: "135"
    })
  })

  test("parses 6 raw records", () => {
    const result = parser.parseRecords()

    expect(result.length).toEqual(6)
    expect(result[0].director).toEqual("David Yates")
  })
})
