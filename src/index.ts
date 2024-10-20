type StringCalculator = {
  calculate: (input: string) => number
  add: (numbers: number[]) => number
  hasCustomDelimiter: (input: string) => boolean
  getDelimiter: (input: string) => string
  getNumbers: (input: string) => number[]
  checkNegetiveNumbers: (numbers: number[]) => void
}

const stringCalculator: StringCalculator = {
  calculate: function (input: string): number {
    const numbers = this.getNumbers(input)
    this.checkNegetiveNumbers(numbers)
    return this.add(numbers)
  },
  add: function (numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0)
  },
  hasCustomDelimiter: function (input: string): boolean {
    return input.startsWith("//")
  },
  getDelimiter: function (input: string): string {
    return input.split("\n")[0].split("//")[1]
  },
  getNumbers: function (input: string): number[] {
    if (!this.hasCustomDelimiter(input)) return input.split(/\n|,/g).map(Number)
    return input.split("\n")[1].split(this.getDelimiter(input)).map(Number)
  },
  checkNegetiveNumbers: function (numbers: number[]) {
    const negativeNumbers = numbers.filter((num) => num < 0)
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`)
    }
  }
}
export default stringCalculator
