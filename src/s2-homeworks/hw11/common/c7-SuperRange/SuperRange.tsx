import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 147,
                color:'#00CC22',
                '& .MuiSlider-thumb': {
                    background: '#FFFFFF',
                    border: '1px solid #00CC22',
                },
                '& .MuiSlider-rail': {
                    color:'#666c67',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
