
import { Stack, Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, ListItemButton, Divider, Avatar } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';

export const MuiList = () => {
    return (
        <Stack spacing={4} > Mui List <br />
            <Box sx={{ width: '400px', bgcolor: '#efefef' }} >
                <List>
                    <ListItem>
                        <ListItemText primary='List Item 1' />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary='List Item 2' />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemText primary='List Item 3' />
                    </ListItem>
                    
                </List>
            </Box>
            <Box sx={{ width: '400px', bgcolor: '#efefef' }} >
                <List>
                    <ListItem disablePadding >
                        <ListItemButton>
                            <ListItemIcon> <MailIcon/> </ListItemIcon>
                            <ListItemText primary='List Item 1' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon> <MailIcon/> </ListItemIcon>
                        <ListItemText primary='List Item 2' />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon> <MailIcon/> </ListItemIcon>
                        <ListItemText primary='List Item 3' />
                    </ListItem>
                </List>
            </Box>
            <Box sx={{ width: '400px', bgcolor: '#efefef' }} >
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MailIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary='List Item 1' secondary='Secondary text' />
                        </ListItemButton>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MailIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary='List Item 2' secondary='Secondary text' />
                        </ListItemButton>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MailIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary='List Item 3' secondary='Secondary text' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Stack>
    )
}