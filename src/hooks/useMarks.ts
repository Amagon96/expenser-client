import {ExpensesInterface} from "../interfaces/ExpensesInterface.ts";


export function useMarks ({ expenses }: ExpensesInterface) {
  const marks:[{value: number, label: string}] = [{value: 0, label: '$0'}]
  const amounts = []
  let minValue = 0
  let maxValue = 0

  for (const expensesKey in expenses) {
    for (const expensesKeyElement of expenses[expensesKey]) {
      amounts.push(expensesKeyElement.data.amount)
    }
  }
  amounts.sort((a, b) => a - b)
  minValue = amounts[0]
  maxValue = amounts[amounts.length - 1]
  marks.pop();

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
