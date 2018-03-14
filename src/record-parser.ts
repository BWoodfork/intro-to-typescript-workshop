import * as fs from "fs"

export interface IMovie {
  name: string
  releaseDate: string
  runtime: string
  director: string
}

export class RecordParser {
  constructor(private filePath: string) {
    this.filePath = filePath
  }

  public parseRecords(): IMovie[] {
    const rawRecords = this.readRawRecords()
    const seperateRecords = this.seperateRawRecords(rawRecords)

    return this.mapRawRecords(seperateRecords)
  }

  public readRawRecords(): string {
    const rawRecords: string = fs.readFileSync(this.filePath, "utf8")

    return rawRecords
  }

  public seperateRawRecords(rawRecords: string): string[] {
    return rawRecords.split("\n")
  }

  public mapRawRecords(rawRecords: string[]): IMovie[] {
    return rawRecords.map((record) => this.mapRawRecord(record))
  }

  public mapRawRecord(rawRecord: string): IMovie {
    const seperateRecord = this.seperateRecordAttributes(rawRecord)
    const [name, releaseDate, runtime, director] = seperateRecord

    return { name, releaseDate, runtime, director }
  }

  private seperateRecordAttributes(rawRecord: string): string[] {
    return rawRecord.split(" | ")
  }
}
