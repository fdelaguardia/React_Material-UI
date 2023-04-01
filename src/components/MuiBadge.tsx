
import { Stack, Badge } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';

export const MuiBadge = () => {
    return (
        <Stack>MuiBadge <br /><br /><br />
            <Stack spacing={2} direction ='row' >
                <Badge badgeContent={0} color='primary' >
                    <MailIcon />
                </Badge>
                <Badge badgeContent={0} color='primary' showZero >
                    <MailIcon />
                </Badge>
                <Badge badgeContent={5} color='warning' >
                    <MailIcon />
                </Badge>
                <Badge badgeContent={100} color='secondary' max={999} >
                    <MailIcon />
                </Badge>
                <Badge variant='dot' color='error' >
                    <MailIcon />
                </Badge>
                <Badge variant='dot' color='error' invisible={true} >
                    <MailIcon />
                </Badge>
            </Stack>
        </Stack>
    )
}