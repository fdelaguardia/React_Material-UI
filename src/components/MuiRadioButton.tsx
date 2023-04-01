
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material'
import { useState } from 'react'

export const MuiRadioButton = () => {

    const [ value, setValue ] = useState('')
    const [ controlColor, setControlColor ] = useState('primary')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue( event.target.value )
        if(value === '0-2'){
            setControlColor('warning')
        } else if(value === '3-5'){
            setControlColor('secondary')
        } else if(value === '6-10'){
            setControlColor('error')
        }
    }

    return (
        <Box>MuiRadioButton <br/><br/>
            <FormControl color={
                value === '0-2' ? 
                    'warning'
                : 
                    value === '3-5' ?
                        'secondary'
                    :
                        'error'
                } >
                <FormLabel>
                    Years of Experience
                </FormLabel>
                <RadioGroup name='job-expirience-group' aria-labelledby='job-expirience-group-label'
                value={value} onChange={handleChange}
                row >
                    <FormControlLabel control={<Radio color='warning' />} label="0-2" value='0-2' />
                    <FormControlLabel control={<Radio size='small' color='secondary' />} label="3-5" value='3-5' />
                    <FormControlLabel control={<Radio color='error' />} label="6-10" value='6-10' />
                </RadioGroup>
                { !value && <FormHelperText>Please choose one</FormHelperText> }
            </FormControl>
        </Box>
    )
}