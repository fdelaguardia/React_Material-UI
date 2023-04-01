
import { Stack, TextField, InputAdornment, IconButton } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react"

 export const MuiTextField = () => {

    const [ value, setValue ] = useState('')
    const [ passwordVisibility, setPasswordVisibility ] = useState('password')

    const handlePasswordVisibility = () => {
        if(passwordVisibility === 'password'){
            setPasswordVisibility('text')
        } else {
            setPasswordVisibility('password')
        }
    }

    return (
        <Stack spacing={4} >MuiTextField <br/>
            <Stack direction={'row'} spacing={2} >
                <TextField label='Name' variant="outlined" />
                <TextField label='Name' variant="filled" />
                <TextField label='Name' variant="standard" />
            </Stack>

            <Stack direction={'row'} spacing={2} >
                <TextField label='Small' size='small' color='warning' variant="outlined" />
                <TextField label='Small' size='small' color='warning' variant="filled" />
                <TextField label='Small' size='small' color='warning' variant="standard" />
            </Stack>

            <Stack direction={'row'} spacing={2} >
                <TextField label='Name' required helperText='Your full name please' color='secondary' variant="outlined" />
                <TextField label='Password' required type={'password'} color='secondary' variant="filled" />
                <TextField label='Email' type={'email'} required color='secondary' variant="standard" />
            </Stack>

            <Stack direction={'row'} spacing={2} >
                <TextField label='Name Disabled' disabled helperText='Your full name please' color='secondary' variant="outlined" />
                <TextField label='Disabled' disabled color='secondary' variant="filled" />
                <TextField label='Read only' type={'email'} InputProps={{ readOnly: true }} value='Can interect, but no edit' color='secondary' variant="standard" />
            </Stack>

            <Stack direction={'row'} spacing={2} >
                <TextField label='Amount' type={'number'} 
                InputProps={{ startAdornment: <InputAdornment position='start' >$</InputAdornment> }} />
                <TextField label='Weight' type={'number'} 
                InputProps={{ endAdornment: <InputAdornment position="end" >kg</InputAdornment> }} />
            </Stack>

            <Stack direction={'row'} spacing={2} >
                <TextField label='Form Input' required value={value} 
                onChange={ e => setValue(e.target.value) } 
                error={!value}
                helperText={!value && 'Required'}
                color='secondary' />
                
                <TextField label='Password' required 
                color='secondary' variant="filled" 
                InputProps={{ endAdornment: 
                    <InputAdornment position="end" >
                        <IconButton onClick={ handlePasswordVisibility } >
                            {
                                passwordVisibility === 'password'  ?
                                <VisibilityIcon/>
                                :
                                <VisibilityOffIcon/>
                            }
                        </IconButton>
                    </InputAdornment> 
                }}
                type={ passwordVisibility }
                />
                
            </Stack>
        </Stack>
    )
 }