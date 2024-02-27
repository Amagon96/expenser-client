export function useMarks ({ expenses }) {
  const marks = []
  const amounts = []
  let minValue = 0
  let maxValue = 0

  for (const expensesKey in expenses) {
    for (const expensesKeyElement of expenses[expensesKey]) {
      amounts.push(parseFloat(expensesKeyElement.data.amount))
    }
  }
  amounts.sort((a, b) => a - b)
  minValue = amounts[0]
  maxValue = amounts[amounts.length - 1]

  marks.push({
    value: minValue,
    label: `$${minValue}`
  })
  marks.push({
    value: maxValue,
    label: `$${maxValue}`
  })
  return { marks }
}
