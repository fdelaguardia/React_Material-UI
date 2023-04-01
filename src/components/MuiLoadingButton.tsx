
import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'

export const MuiLoadingButton = () => {
  return (
    <Stack>MuiLoadingButton <br /><br />
        <Stack spacing={2} direction='row' >
            <LoadingButton variant='contained' >Submit</LoadingButton>
            <LoadingButton loading variant='contained' >Submit</LoadingButton>
            <LoadingButton variant='outlined' loadingIndicator='Loading...' >Fetch Data</LoadingButton>
            <LoadingButton loading variant='outlined' loadingIndicator='Loading...' >Fetch Data</LoadingButton>
            <LoadingButton variant='outlined' loadingPosition='start' startIcon={<SaveIcon/>} >
                Save
            </LoadingButton>
            <LoadingButton loading variant='outlined' loadingPosition='start' startIcon={<SaveIcon/>} >
                Save
            </LoadingButton>
        </Stack>
    </Stack>
  )
}
