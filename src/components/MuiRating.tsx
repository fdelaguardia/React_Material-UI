
import { Stack, Rating, Checkbox, Box } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react"

export const MuiRating = () => {

    const [ value, setValue ] = useState<number | null>(null)

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)
    }

    return (
        <Stack spacing={2}>MuiRating <br/> <br/>
            <Rating value={value} onChange={handleChange}
            size='small' />
            <Rating value={value} onChange={handleChange}
            precision={0.5} />
            <Rating value={value} onChange={handleChange}
            precision={0.1} size='large' />

            <Rating value={value} onChange={handleChange}
            precision={0.1} size='large'
            icon={<FavoriteIcon fontSize="inherit" color="secondary" />} 
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} />
            
            <Rating value={3.3} onChange={handleChange}
            precision={0.1} size='large'
            icon={<FavoriteIcon fontSize="inherit" color="error" />} 
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            readOnly />

            <Rating value={value} onChange={handleChange}
            precision={0.1} size='large'
            icon={<FavoriteIcon fontSize="inherit" color="error" />} 
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            highlightSelectedOnly />

            <Box>
                <Checkbox icon={<FavoriteBorderIcon/>} checkedIcon={<FavoriteIcon color='error' />} 
                />
            </Box>
        </Stack>
    )
}