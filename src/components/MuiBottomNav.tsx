
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from "react";

export const MuiBottomNav = () => {

    const [ value, setValue ] = useState(0)
    console.log({value})

    return (
        <BottomNavigation sx={{ width: '100%', position: 'fixed', bottom: 0 }}
        value={value} onChange={(event, newValue) => {setValue(newValue)}} showLabels >
            <BottomNavigationAction label='Home' icon={<HomeIcon/>} />
            <BottomNavigationAction label='Favorite' icon={<FavoriteIcon/>} />
            <BottomNavigationAction label='Person' icon={<PersonIcon/>} />
        </BottomNavigation>
    )
}