import { RecordSorter } from "../../src/solution/record-sorter"

describe("record sorter", () => {
  let sorter

  beforeEach(() => {
    sorter = new RecordSorter()
  })

  describe("sort by name", () => {
    test("sorts movies alphabetically by name", () => {
      const records = [
        {
          name: "Black Panther"
        },
        {
          name: "Harry Potter"
        }
      ]

      const sortRecordsByName = sorter.sortRecordsByName(records)

      expect(sortRecordsByName).toEqual([
        {
          name: "Black Panther"
        },
        {
          name: "Harry Potter"
        }
      ])
    })

    test("sorts movies alphabetically by name", () => {
      const records = [
        {
          name: "Wonder Woman"
        },
        {
          name: "A League of Their Own"
        },
        {
          name: "Lord of The Rings"
        }
      ]

      const sortRecordsByName = sorter.sortRecordsByName(records)

      expect(sortRecordsByName).toEqual([
        {
          name: "A League of Their Own"
        },
        {
          name: "Lord of The Rings"
        },
        {
          name: "Wonder Woman"
        }
      ])
    })
  })

  describe("sort by release date", () => {
    it("sorts movies by their release date - ascending", () => {
      const records = [{ releaseDate: "11-16-2001" }, { releaseDate: "01-30-1990" }, { releaseDate: "05-01-2020" }]
      expect(sorter.sortByReleaseDate(records)).toEqual([
        { releaseDate: "01-30-1990" },
        { releaseDate: "11-16-2001" },
        { releaseDate: "05-01-2020" }
      ])
    })
  })
})
