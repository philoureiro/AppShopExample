export function ParseDate(input: string): Date {
  const [date, month, year] = input.split('/')
  const returnDate = new Date()
  returnDate.setDate(parseInt(date))
  returnDate.setMonth(parseInt(month) - 1)
  returnDate.setFullYear(parseInt(year))
  return returnDate
}
