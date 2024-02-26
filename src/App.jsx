import './App.css'
import { useState } from 'react'
import { Expenses } from './components/Expenses.jsx'
import { useExpenses } from './hooks/useExpenses.js'
import Slider from '@mui/material/Slider'
import { Box } from '@mui/material'

const marks = [
  {
    value: 0,
    label: '0°C'
  },
  {
    value: 20,
    label: '20°C'
  },
  {
    value: 40,
    label: '40°C'
  },
  {
    value: 100,
    label: '100°C'
  }
]

function valuetext (value) {
  return `${value}°C`
}

function App () {
  const [query, setQuery] = useState('')
  const { expenses, getExpenses } = useExpenses({ query })

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
    getExpenses({ search: newQuery })
  }

  function handleSubmit (event) {
    event.preventDefault()
    // getExpenses({ query })
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
      <Box
        sx={{
          width: '50%',
          display: 'flex'
        }}
      >
        <Slider
          sx={{
            '.MuiSlider-markLabel': {
              color: '#bcbfcc'
            }
          }}
          aria-label='Restricted values'
          getAriaValueText={valuetext}
          step={10}
          marks={marks}
          valueLabelDisplay='auto'
        />
      </Box>
      <main>
        <Expenses expenses={expenses} />
      </main>
    </div>
  )
}

export default App
