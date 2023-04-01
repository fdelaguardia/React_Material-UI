
import { Typography  } from "@mui/material"

export const MuiTypography = () => {
    return (
        <div>MuiTypography
            <Typography variant='h1' >h1 Heading</Typography>
            <Typography variant='h2' >h2 Heading</Typography>
            <Typography variant='h3' >h3 Heading</Typography>
            <Typography variant='h4' component='h1' gutterBottom >h4 Heading</Typography>
            <Typography variant='h5' >h5 Heading</Typography>
            <Typography variant='h6' >h6 Heading</Typography>
            
            <Typography variant='subtitle1' > subtitle1 Heading</Typography>
            <Typography variant='subtitle2' >subtitle2 Heading</Typography>


            <Typography variant='body1' > body1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta asperiores similique aut amet deleniti, suscipit obcaecati quidem magnam nisi itaque! Eligendi a libero fugiat, molestiae ipsum similique hic quos iste!</Typography>
            <Typography variant='body2' >body2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta asperiores similique aut amet deleniti, suscipit obcaecati quidem magnam nisi itaque! Eligendi a libero fugiat, molestiae ipsum similique hic quos iste!</Typography>
        </div>
    )
}