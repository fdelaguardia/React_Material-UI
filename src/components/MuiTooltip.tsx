
import { Box, IconButton, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export const MuiTooltip = () => {
    return (
        <Box> MuiTooltip <br /><br />
            <Tooltip title='Delete 1' placement='right-start' arrow >
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
            <br />
            <Tooltip title='Delete 2' placement='bottom-start' arrow enterDelay={500} leaveDelay={200} >
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
        </Box>
    )
}