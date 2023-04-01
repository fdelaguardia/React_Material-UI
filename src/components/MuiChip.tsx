
import { Stack, Chip, Avatar } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face';
import { useState } from 'react';

export const MuiChip = () => {

    const [ chips, setChips ] = useState(['Chip 1', 'Chip 2', 'Chip 3'])

    const handleDelete = (chipToDelete: String) => {
        setChips((chips) => chips.filter((chip) => chip !== chipToDelete))
    }

    return (
        <Stack direction='column' spacing={4} > MuiChip <br /><br />
            <Stack direction='row' spacing={1} >
                <Chip label='Chip' color='primary' size='small' avatar={<FaceIcon/>} />
                <Chip label='Chip outlined' color='secondary' size='small' variant='outlined'
                avatar={<Avatar>V</Avatar>} />
                <Chip label='Click' size='small' color='success' onClick={() => alert('Cliked')} />
                <Chip label='Delete' size='small' color='error' onClick={() => alert('Cliked')} 
                onDelete={() => alert('Delete handler called')} />
            </Stack>
            <Stack direction='row' spacing={1} >
                {
                    chips.map(chip => (
                        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
                    ))
                }
            </Stack>
        </Stack>
    )
}

