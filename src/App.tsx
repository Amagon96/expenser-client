import './App.css'
import {ChangeEvent, FormEvent, useState} from 'react'
import { Expenses } from './components/Expenses'
import { useExpenses } from './hooks/useExpenses'
import { CustomSlider } from './components/CustomSlider.tsx'
import { useMarks } from './hooks/useMarks'
import {styled, TextField} from "@mui/material";

const CssTextField = styled(TextField)({
  backgroundColor: "#161F27",
  input: {
    color: "#EFEFEF",
  },
  "& label.Mui-focused": {
    color: "#EFEFEF"
  },
  "& label": {
    color: "#A9B1BA",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#EFEFEF",
    color: "#A9B1BA",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#A9B1BA",
      color: "#EFEFEF",
    },
    "&:hover fieldset": {
      borderColor: "#EFEFEF",
      color: "#EFEFEF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EFEFEF",
      color: "#EFEFEF",
    },
  },
});

export default function App () {
  const [query, setQuery] = useState('')
  const [value, setValue] = useState([0, 100])
  const { expenses, getExpenses } = useExpenses({ query })
  const { marks } = useMarks({ expenses })
  const minDistance = parseInt(import.meta.env.VITE_REACT_APP_MIN_DISTANCE)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value
    setQuery(newQuery)
    getExpenses({ query: newQuery })
  }

  const handleSliderChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    event.preventDefault()
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
  console.log(expenses)

  function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className='page'>
      <header>
        <h1>Expenser</h1>
        <form onSubmit={handleSubmit}>
          <CssTextField
              fullWidth
              label="Transaction, Amount, Description"
              id="custom-css-outlined-input"
              onChange={handleChange}
              value={query}
          />
        </form>
      </header>
      { Object.keys(expenses).length !== 0 ?
          <CustomSlider
              handleSliderChange={handleSliderChange}
              value={value}
              marks={marks}
          /> : <h4>No expenses found</h4>
      }
      <main>
        <Expenses expenses={expenses} />
      </main>
    </div>
  )
}
