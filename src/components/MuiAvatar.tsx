
import { Stack, Avatar, AvatarGroup } from "@mui/material";
import { width } from "@mui/system";

export const MuiAvatar = () => {
    return (
        <Stack spacing={4} > MuiAvatar <br />
            <Stack direction={'row'} spacing={1} >
                <Avatar sx={{ backgroundColor: 'primary.light' }} >BW</Avatar>
                <Avatar sx={{ backgroundColor: 'success.light' }} >CK</Avatar>
                <Avatar src='https://randomuser.me/api/portraits/men/79.jpg'
                alt='John Doe' />
            </Stack>

            <Stack direction={'row'} spacing={1} >
                <Avatar variant="square" sx={{ backgroundColor: 'primary.light', width: 50, height: 50 }} >BW</Avatar>
                <Avatar variant="rounded" sx={{ backgroundColor: 'success.light', width: 50, height: 50 }} >CK</Avatar>
                <Avatar src='https://randomuser.me/api/portraits/women/79.jpg'
                alt='Jane Doe' variant="rounded" sx={{ width: 50, height: 50 }} />
            </Stack>

            <Stack direction={'row'} spacing={1} >
                <AvatarGroup max={3} >
                    <Avatar sx={{ backgroundColor: 'primary.light' }} >BW</Avatar>
                    <Avatar sx={{ backgroundColor: 'success.light' }} >CK</Avatar>

                    <Avatar src='https://randomuser.me/api/portraits/women/79.jpg'
                    alt='Jane Doe' />
                    <Avatar src='https://randomuser.me/api/portraits/men/79.jpg'
                    alt='John Doe' />
                </AvatarGroup>
            </Stack>

            <Stack direction={'row'} spacing={1} >
                <AvatarGroup>
                    <Avatar sx={{ backgroundColor: 'primary.light', width: 100, height: 100 }} >BW</Avatar>
                    <Avatar sx={{ backgroundColor: 'success.light', width: 100, height: 100 }} >CK</Avatar>

                    <Avatar src='https://randomuser.me/api/portraits/women/79.jpg'
                    alt='Jane Doe' sx={{ width: 100, height: 100 }} />
                    <Avatar src='https://randomuser.me/api/portraits/men/79.jpg'
                    alt='John Doe' sx={{ width: 100, height: 100 }} />
                </AvatarGroup>
            </Stack>
        </Stack>
    )
}