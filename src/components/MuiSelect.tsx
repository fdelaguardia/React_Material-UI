
import { Box, TextField, MenuItem, Stack } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {

    const [ country, setCountry ] = useState<string[]>([])
    const [ country2, setCountry2 ] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountry(typeof value === 'string' ? value.split(',') : value)
    }

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry2(event.target.value as string)
    }

    return (
        <Stack> MuiSelect <br/><br/>
            <Stack spacing={4} direction='row' >
            <Box width='250px' >
                <TextField label='Slect Country' select value={country} 
                onChange={handleChange} fullWidth 
                SelectProps={{ multiple: true }}
                size='small'
                color="warning"
                helperText='Please select one or more countries' >
                    <MenuItem value='IN' >India</MenuItem>
                    <MenuItem value='US' >USA</MenuItem>
                    <MenuItem value='AU' >Australia</MenuItem>
                </TextField>
            </Box>

            <Box width='250px' >
                <TextField label='Slect Country' select value={country2} 
                onChange={handleChange2} fullWidth 
                size='medium'
                color="secondary"
                helperText='Please select one country' >
                    <MenuItem value='IN' >India</MenuItem>
                    <MenuItem value='US' >USA</MenuItem>
                    <MenuItem value='AU' >Australia</MenuItem>
                </TextField>
            </Box>
            </Stack>
        </Stack>
    )
}