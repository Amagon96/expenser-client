import Slider from '@mui/material/Slider'
import { Box } from '@mui/material'

interface CustomSliderInterface {
    handleSliderChange: (event: Event, newValue: number | number[], activeThumb: number) => void,
    value: number[],
    marks: [
        {
            value: number,
            label: string
        }
    ]
}

export const CustomSlider = ({ handleSliderChange, value, marks }: CustomSliderInterface) => {
  return (
    <Box
      sx={{
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '25px'
      }}
    >
      <Slider
        sx={{
          '.MuiSlider-markLabel': {
            color: '#bcbfcc'
          }
        }}
        value={value}
        getAriaLabel={() => 'Amount range'}
        onChange={handleSliderChange}
        step={1}
        marks={marks}
        valueLabelDisplay='auto'
        disableSwap
      />
    </Box>
  )
}
