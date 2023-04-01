
import { Button, Stack, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

import { useState } from 'react'

export const MuiButton = () => {

    const [ formats, setFormats ] = useState<string[]>([])
    const [ formats2, setFormats2 ] = useState<string | null>(null)

    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => { setFormats(updatedFormats) }
    
    const handleFormatChange2 = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => { setFormats2(updatedFormats) }
    
    return (
        <Stack spacing={4} > MuiButton
            <Stack spacing={2} direction='row' >
                <Button variant='text' href='https://google.com' >Text</Button>
                <Button variant='contained' >Contained</Button>
                <Button variant='outlined' >Outlined</Button>
            </Stack>

            <Stack spacing={2} direction='row' >
                <Button variant='contained' color='primary' >Primary</Button>
                <Button variant='contained' color='secondary' >secondary</Button>
                <Button variant='contained' color='error' >error</Button>
                <Button variant='contained' color='warning' >warning</Button>
                <Button variant='contained' color='info' >info</Button>
                <Button variant='contained' color='success' >success</Button>
            </Stack>

            <Stack spacing={2} direction='row' >
                <Button variant='outlined' color='primary' >Primary</Button>
                <Button variant='outlined' color='secondary' >secondary</Button>
                <Button variant='outlined' color='error' >error</Button>
                <Button variant='outlined' color='warning' >warning</Button>
                <Button variant='outlined' color='info' >info</Button>
                <Button variant='outlined' color='success' >success</Button>
            </Stack>

            <Stack display={'block'} spacing={2} direction='row' >
                <Button variant='contained' size='small' >Small</Button>
                <Button variant='contained' size='medium' >Medium</Button>
                <Button variant='contained' size='large' >Large</Button>
            </Stack>

            <Stack spacing={2} direction='row' >
                <Button variant='contained' startIcon={<SendIcon/>} disableRipple
                onClick={() => { alert('Cliked') }} >Send</Button>
                <Button variant='contained' endIcon={<SendIcon/>} disableElevation >Send</Button>
                <IconButton aria-label='send' color='warning' size='small' >
                    <SendIcon/>
                </IconButton>
            </Stack>

            <Stack direction={'row'} >
                <ButtonGroup variant='outlined' orientation='vertical'size='large' color='warning' aria-label='alignment button group' >
                    <Button onClick={() => { alert('Left Cliked') }} >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction={'row'} >
                <ToggleButtonGroup aria-label='text-formating' value={formats} 
                onChange={handleFormatChange} size='small' color='secondary' 
                orientation='vertical' >
                    <ToggleButton value={'bold'} aria-label='bold' >
                        <FormatBoldIcon/>
                    </ToggleButton>
                    <ToggleButton value={'italic'} aria-label='italic' >
                        <FormatItalicIcon/>
                    </ToggleButton>
                    <ToggleButton value={'underlined'} aria-label='underlined' >
                        <FormatUnderlinedIcon/>
                    </ToggleButton>
                </ToggleButtonGroup>

                <ToggleButtonGroup aria-label='text-formating' value={formats2} 
                onChange={handleFormatChange2} size='medium' color='secondary' 
                orientation='vertical' exclusive >
                    <ToggleButton value={'bold'} aria-label='bold' >
                        <FormatBoldIcon/>
                    </ToggleButton>
                    <ToggleButton value={'italic'} aria-label='italic' >
                        <FormatItalicIcon/>
                    </ToggleButton>
                    <ToggleButton value={'underlined'} aria-label='underlined' >
                        <FormatUnderlinedIcon/>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}