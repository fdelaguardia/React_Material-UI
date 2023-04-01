
import { Stack, Autocomplete, TextField } from "@mui/material";
import { type } from "os";
import { useState } from "react";

export const MuiAutocomplete = () => {

    const [ value, setValue ] = useState<string | null>(null)
    const [ skill, setSkill ] = useState<Skill | null>(null)

    console.log({ skill })

    const skills = [ 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React' ]

    const skillsOptions = skills.map((skill, index) => ({
        id: index + 1,
        label: skill
    }))

    type Skill = {
        id: number
        label: string
    }

    return (
        <Stack spacing={2} width='250px' >MuiAutocomplete <br/> <br/>
            <Autocomplete options={skills} 
            renderInput={(params) => <TextField {...params} label='Skills' />}
            onChange={(event: any, newValue: string | null) => setValue(newValue)} 
            value={value} freeSolo />

            <Autocomplete options={skillsOptions} 
            renderInput={(params) => <TextField {...params} label='Skills' />}
            onChange={(event: any, newValue: Skill | null) => setSkill(newValue)} 
            value={skill} />
        </Stack>
    )
}
