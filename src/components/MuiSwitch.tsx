
import { Box, FormControlLabel, Switch } from '@mui/material'
import { useState } from 'react'

export const MuiSwitch = () => {

    const [ checked, setChecked ] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    return (
        <Box>MuiSwitch <br/> <br/>
            <FormControlLabel label='Dark Mode' control={<Switch color='secondary' onChange={handleChange} />} 
            checked={checked} />
        </Box>
    )
}