import './App.css'
import { useState } from 'react'
import { Expenses } from './components/Expenses.jsx'
import { useExpenses } from './hooks/useExpenses.js'
import Slider from '@mui/material/Slider'
import { Box } from '@mui/material'
import { Login } from './components/Login.jsx'

const marks = [
  {
    value: 0,
    label: '$0'
  },
  {
    value: 10,
    label: '$10'
  },
  {
    value: 20,
    label: '$20'
  },
  {
    value: 40,
    label: '$40'
  },
  {
    value: 100,
    label: '$100'
  }
]

function valuetext (value) {
  return `$${value}`
}

function App () {
  const [query, setQuery] = useState('')
  const { expenses, getExpenses } = useExpenses({ query })
  const [value, setValue] = useState([0, 100])

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
    <Login />
    // <div className='page'>
    //   <header>
    //     <h1>Expenser</h1>
    //     <form onSubmit={handleSubmit}>
    //       <input
    //         placeholder='Transaction, Amount, Description'
    //         onChange={handleChange}
    //         value={query}
    //       />
    //     </form>
    //   </header>
    //   <Box
    //     sx={{
    //       width: '50%',
    //       display: 'flex',
    //       justifyContent: 'center',
    //       marginLeft: '25px'
    //     }}
    //   >
    //     <Slider
    //       sx={{
    //         '.MuiSlider-markLabel': {
    //           color: '#bcbfcc'
    //         }
    //       }}
    //       value={value}
    //       getAriaLabel={() => 'Temperature range'}
    //       getAriaValueText={valuetext}
    //       onChange={handleSliderChange}
    //       step={10}
    //       marks={marks}
    //       valueLabelDisplay='auto'
    //       disableSwap
    //     />
    //   </Box>
    //   <main>
    //     <Expenses expenses={expenses} />
    //   </main>
    // </div>
  )
}

export default App
