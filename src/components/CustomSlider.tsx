import Slider from '@mui/material/Slider'
import { Box } from '@mui/material'
import {CustomSliderInterface} from "../interfaces/ExpensesInterface.ts";

export function CustomSlider({ handleSliderChange, value, marks }: CustomSliderInterface) {
  return (
    <Box
      sx={{
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '25px',
        marginTop: '25px'
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
