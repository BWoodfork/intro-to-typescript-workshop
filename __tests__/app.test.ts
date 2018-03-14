import { doThing } from "../src/app"

describe("App", () => {
  it("does a thing....", () => {
    const result = doThing()

    expect(result).toEqual(300)
  })
})
