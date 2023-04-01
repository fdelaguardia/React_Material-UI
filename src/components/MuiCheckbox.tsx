
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material'
import { useState } from 'react'

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const MuiCheckbox = () => {

    const [ acceptTnC, setAcceptTnC ] = useState(false)
    const [ skills, setSkills ] = useState<string[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if(index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value) )
        }
    }

    return (
        <Box>MuiCheckBox <br/> <br/>
            <Box>
                <FormControlLabel label='I accept terms and conditions'
                control={<Checkbox color='secondary' checked={acceptTnC} onChange={handleChange} />} />
            </Box>

            <Box>
                <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon color='error' />} 
                checked={acceptTnC} onChange={handleChange} />
            </Box>

            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row >
                        <FormControlLabel label='HTML' value={'HTML'}
                        control={<Checkbox color='warning' checked={skills.includes('HTML')} 
                        onChange={handleSkillChange} />} />
                        <FormControlLabel label='CSS' value={'CSS'}
                        control={<Checkbox size='small' color='secondary' checked={skills.includes('CSS')} 
                        onChange={handleSkillChange} />} />
                        <FormControlLabel label='JavaScript' value={'JavaScript'}
                        control={<Checkbox color='error' checked={skills.includes('JavaScript')} 
                        onChange={handleSkillChange} />} />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}