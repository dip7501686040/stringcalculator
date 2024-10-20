const stringCalculator = {
  add: (input: string): number => {
    const numbers = input.split(/\n|,/).map(Number)
    return numbers.reduce((total, num) => total + num, 0)
  }
}
export default stringCalculator
