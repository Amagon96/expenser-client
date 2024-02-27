import './App.css'
import { useState } from 'react'
import { Expenses } from './components/Expenses.jsx'
import { useExpenses } from './hooks/useExpenses.js'
import { CustomSlider } from './components/CustomSlider.jsx'
import { useMarks } from './hooks/useMarks.js'

function valueText (value) {
  return `$${value}`
}

function App () {
  const [query, setQuery] = useState('')
  const { expenses, getExpenses } = useExpenses({ query })
  const [value, setValue] = useState([0, 100])
  const { marks } = useMarks({ expenses })

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
    getExpenses({ search: newQuery })
  }

  const minDistance = 10

  const handleSliderChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]])
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)])
    }
    getExpenses({ query, range: newValue })
  }

  function handleSubmit (event) {
    event.preventDefault()
  }

  return (
    <div className='page'>
      <header>
        <h1>Expenser</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Transaction, Amount, Description'
            onChange={handleChange}
            value={query}
          />
        </form>
      </header>
      <CustomSlider
        handleSliderChange={handleSliderChange}
        value={value}
        valueText={valueText}
        marks={marks}
      />
      <main>
        <Expenses expenses={expenses} />
      </main>
    </div>
  )
}

export default App
