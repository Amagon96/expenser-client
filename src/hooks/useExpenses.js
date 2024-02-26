import { RESULTS } from '../mocks/withResults.js'
import { useState } from 'react'

export function useExpenses ({ query, range }) {
  const [expenses, setExpenses] = useState({})
  const sortedResults = RESULTS.sort((a, b) => {
    return new Date(b.data.date) - new Date(a.data.date)
  })
  const getExpenses = ({ search, range }) => {
    const newExpenses = sortedResults.filter((expense) => {
      if (search) {
        return (
          expense.data.description.includes(search.toLowerCase()) ||
          expense.data.accountName.toLowerCase().includes(search.toLowerCase()) ||
          expense.data.date.toLowerCase().includes(search.toLowerCase()) ||
          (
            expense.data.amount >= range[0] && expense.data.amount <= range[1]
          )
        )
      }
      return expense.data.amount >= range[0] && expense.data.amount <= range[1]
    })
    const groupedExpenses = Object.groupBy(newExpenses, ({ data }) => data.date)
    setExpenses(groupedExpenses)
  }

  const groupedExpenses = Object.keys(expenses).length === 0 && !query
    ? Object.groupBy(sortedResults, ({ data }) => data.date)
    : expenses

  return { expenses: groupedExpenses, getExpenses }
}
