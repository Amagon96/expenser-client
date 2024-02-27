import Slider from '@mui/material/Slider'
import { Box } from '@mui/material'

export const CustomSlider = ({ handleSliderChange, value, valueText, marks }) => {
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
        getAriaValueText={valueText}
        onChange={handleSliderChange}
        step={1}
        marks={marks}
        valueLabelDisplay='auto'
        disableSwap
      />
    </Box>
  )
}
