import * as fs from "fs"

export interface Movie {
  name: string
  releaseDate: string
  runtime: string
  director: string
}

export class RecordParser {
  constructor(private filePath: string) {
    this.filePath = filePath
  }

  public parseRecords(): Movie[] {
    const rawRecords = this.readRawRecords()
    const seperateRecords = this.seperateRawRecords(rawRecords)

    return this.mapRawRecords(seperateRecords)
  }

  public readRawRecords(): string {
    const rawRecords: string = fs.readFileSync(this.filePath, "utf8")

    return rawRecords
  }

  private seperateRawRecords(rawRecords: string): string[] {
    return rawRecords.split("\n")
  }

  private mapRawRecords(rawRecords: string[]): Movie[] {
    return rawRecords.map((record) => this.mapRawRecord(record))
  }

  private mapRawRecord(rawRecord: string): Movie {
    const seperateRecord = this.seperateRecordAttributes(rawRecord)
    const [name, releaseDate, runtime, director] = seperateRecord

    return { name, releaseDate, runtime, director }
  }

  private seperateRecordAttributes(rawRecord: string): string[] {
    return rawRecord.split(" | ")
  }
}
