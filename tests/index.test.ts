import stringCalculator from "../src/index"

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(stringCalculator.add("")).toBe(0)
  })

  test("should return the number for a single number", () => {
    expect(stringCalculator.add("1")).toBe(1)
  })

  test("should return the sum of two numbers", () => {
    expect(stringCalculator.add("1,2")).toBe(3)
  })
})
