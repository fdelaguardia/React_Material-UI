
import { Stack, CircularProgress, LinearProgress } from '@mui/material'

export const MuiProgress = () => {
    return (
        <Stack spacing={2} > MuiProgress <br /><br />
            <Stack spacing={4} direction='row' >
                <CircularProgress />
                <CircularProgress color='success' />
                <CircularProgress color='warning' variant='determinate' value={70} />
            </Stack>
            <Stack spacing={4} direction='column' >
                <LinearProgress />
                <LinearProgress color='success' />
                <LinearProgress color='warning' variant='determinate' value={70} />
            </Stack>
        </Stack>
    )
}