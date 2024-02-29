import { Fragment } from 'react'
import {ExpenseInterface, ExpensesInterface} from "../interfaces/ExpensesInterface.ts";

export function Expenses ({ expenses }: ExpensesInterface) {
  return (
    <ul className='expenses'>
      {Object.keys(expenses).map(key => (
        <Fragment key={key}>
          <h4 className='date-header'>{key}</h4>
          {expenses[key].map((expense: ExpenseInterface) => (
            <li key={expense.data.expenseId}>
              <h4 className='description-header'>{expense.data.description[0].toUpperCase() + expense.data.description.slice(1)}</h4>
              <div className='transaction-container'>
                <p className='description'>{expense.data.accountName}</p>
                <p className={expense.data.type.toLowerCase()}>{expense.data.amount}</p>
              </div>
            </li>
          ))}
        </Fragment>
      ))}
    </ul>
  )
}
