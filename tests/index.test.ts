import stringCalculator from "../src/index"

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(stringCalculator("")).toBe(0)
  })
})
