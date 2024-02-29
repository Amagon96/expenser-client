import { RESULTS } from '../mocks/withResults'
import { useState } from 'react'
import {
  ExpenseInterface ,
  UseExpensesInterface
} from "../interfaces/ExpensesInterface.ts";

const objectGroupBy = (object: ExpenseInterface[]) => {
  // @ts-ignore could not fix TS2339: Property 'groupBy' does not exist on type 'ObjectConstructor' yet
  return Object.groupBy(object, ({ data }: ExpenseInterface) => data.date)
}


export function useExpenses ({ query }: UseExpensesInterface) {
  const [expenses, setExpenses] = useState({})
  const sortedResults = RESULTS.sort((a, b) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
  const getExpenses = ({query: search, range }: UseExpensesInterface) => {
    const newExpenses = sortedResults.filter((expense) => {
      let firstValue = 0
      let secondValue = 100
      if (range) {
        firstValue = range[0]
        secondValue = range[1]
      }
      if (search) {
        return (
          expense.data.description.includes(search.toLowerCase()) ||
          expense.data.accountName.toLowerCase().includes(search.toLowerCase()) ||
          expense.data.date.toLowerCase().includes(search.toLowerCase()) &&
          (
            expense.data.amount >= firstValue && expense.data.amount <= secondValue
          )
        )
      }
      return expense.data.amount >= firstValue && expense.data.amount <= secondValue
    })
    const groupedExpenses = objectGroupBy(newExpenses)
    setExpenses(groupedExpenses)
  }

  const groupedExpenses = Object.keys(expenses).length === 0 && !query
    ? objectGroupBy(sortedResults)
    : expenses

  return { expenses: groupedExpenses, getExpenses }
}
