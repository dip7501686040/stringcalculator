import stringCalculator from "../src/index"

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(stringCalculator.add("")).toBe(0)
  })

  test("should return the number for a single number", () => {
    expect(stringCalculator.add("1")).toBe(1)
  })

  test("should return the sum of two numbers", () => {
    expect(stringCalculator.add("2,3")).toBe(5)
  })

  test("should return the sum of multiple numbers", () => {
    expect(stringCalculator.add("2,3,4,6,2,10")).toBe(27)
  })

  test("should return the sum of multiple numbers with new line", () => {
    expect(stringCalculator.add("2\n3,4,6,2,10")).toBe(27)
  })
})
