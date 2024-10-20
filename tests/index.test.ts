import stringCalculator from "../src/index"

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(stringCalculator.calculate("")).toBe(0)
  })

  test("should return the number for a single number", () => {
    expect(stringCalculator.calculate("1")).toBe(1)
  })

  test("should return the sum of two numbers", () => {
    expect(stringCalculator.calculate("2,3")).toBe(5)
  })

  test("should return the sum of multiple numbers", () => {
    expect(stringCalculator.calculate("2,3,4,6,2,10")).toBe(27)
  })

  test("should return the sum of multiple numbers with new line", () => {
    expect(stringCalculator.calculate("2\n3,4,6,2,10")).toBe(27)
  })

  test("should return the sum of multiple numbers with custom delimiter", () => {
    expect(stringCalculator.calculate("//;\n2;3;4;6;2;10")).toBe(27)
  })

  test("Calling calculate with a negative number will throw an exception: 'negative numbers not allowed <negative_number>'", () => {
    expect(() => stringCalculator.calculate("2,-3,4,6,-2,10,-12")).toThrow("negative numbers not allowed -3,-2,-12")
  })
})
