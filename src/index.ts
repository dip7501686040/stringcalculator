type StringCalculator = {
  calculate: (input: string) => number
  add: (numbers: number[]) => number
  hasCustomDelimiter: (input: string) => boolean
  getDelimiter: (input: string) => string
  getNumbers: (input: string) => number[]
}

const stringCalculator: StringCalculator = {
  calculate: function (input: string): number {
    if (this.hasCustomDelimiter(input)) {
      return this.add(this.getNumbers(input))
    }
    const numbers = input.split(/\n|,/g).map(Number)
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
    return input.split("\n")[1].split(this.getDelimiter(input)).map(Number)
  }
}
export default stringCalculator
